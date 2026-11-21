// Source-owned shadcn/ui button pattern (MIT), adapted to ML Lab's palette.
// Reference: https://ui.shadcn.com/docs/components/button
import React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva,type VariantProps} from 'class-variance-authority';
import {clsx,type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
export function cn(...values:ClassValue[]){return twMerge(clsx(values))}
const variants=cva('inline-flex items-center justify-center gap-2 whitespace-normal align-middle disabled:pointer-events-none disabled:opacity-50',{variants:{variant:{default:'ml-btn',secondary:'ml-btn ml-secondary'}},defaultVariants:{variant:'default'}});
export function UIButton({className,variant,asChild=false,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof variants>&{asChild?:boolean}){const Comp=asChild?Slot:'button';return <Comp type="button" className={cn(variants({variant}),className)} {...props}/>}
