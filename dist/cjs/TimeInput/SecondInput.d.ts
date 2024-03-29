import React from 'react';
import Input from './Input.js';
type SecondInputProps = {
    hour?: string | null;
    maxTime?: string;
    minTime?: string;
    minute?: string | null;
    showLeadingZeros?: boolean;
} & Omit<React.ComponentProps<typeof Input>, 'max' | 'min' | 'name'>;
export default function SecondInput({ hour, maxTime, minTime, minute, showLeadingZeros, ...otherProps }: SecondInputProps): React.JSX.Element;
export {};
