def auth(client, name):
    credentials={'username':name, 'password':'my-strong-test-password'}
    assert client.post('/api/v1/auth/register',json=credentials).status_code==201
    response=client.post('/api/v1/auth/login',json=credentials)
    assert response.status_code==200
    return {'Authorization':'Bearer '+response.json()['access_token']}

def test_progress_requires_account(secured):
    assert secured.get('/api/v1/progress').status_code==401

def test_owner_scoped_round_trip(secured):
    a=auth(secured,'learner_a');b=auth(secured,'learner_b')
    payload={'completedUnits':['regression'],'language':'ar','theme':'light','quizScores':{'test':90},'exerciseResults':{'pandas-q1':{'status':'solved','hints':1,'solutionUsed':False,'updatedAt':'2026-11-23T10:00:00Z'}}}
    assert secured.put('/api/v1/progress',json=payload,headers=a).status_code==200
    assert secured.get('/api/v1/progress',headers=a).json()['exerciseResults']['pandas-q1']['status']=='solved'
    assert secured.get('/api/v1/progress',headers=b).json()['completedUnits']==[]
    assert secured.put('/api/v1/progress',json={'quizScores':{'test':101}},headers=a).status_code==422
    assert secured.put('/api/v1/progress',json={'unknown':'value'},headers=a).status_code==422
    assert secured.post('/api/v1/auth/logout',headers=a).status_code==204
    assert secured.get('/api/v1/progress',headers=a).status_code==401

def test_auth_throttle(secured):
    for i in range(12):
        r=secured.post('/api/v1/auth/login',json={'username':'missing','password':'test-password-123'})
        assert r.status_code==401
    r=secured.post('/api/v1/auth/login',json={'username':'missing','password':'test-password-123'})
    assert r.status_code==429 and r.headers['retry-after']=='60'
