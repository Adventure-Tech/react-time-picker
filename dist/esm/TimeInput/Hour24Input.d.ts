import React from 'react';
import Input from './Input.js';
type Hour24InputProps = {
    maxTime?: string;
    minTime?: string;
    value?: string | null;
} & Omit<React.ComponentProps<typeof Input>, 'max' | 'min' | 'name' | 'nameForClass'>;
export default function Hour24Input({ maxTime, minTime, ...otherProps }: Hour24InputProps): React.JSX.Element;
export {};
