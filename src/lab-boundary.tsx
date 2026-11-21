import React from 'react';
export class LabBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return{failed:true}}
 render(){if(this.state.failed)return <section className="ml-panel" role="alert"><h2>This workspace could not open.</h2><p>Reload the page to try again. Unsaved session changes may be lost. You can still use the navigation to open another workspace.</p><button className="ml-btn" type="button" onClick={()=>window.location.reload()}>Reload this page</button></section>;return this.props.children}
}
