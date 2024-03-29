import React from 'react';
import Input from './Input.js';
type MinuteInputProps = {
    hour?: string | null;
    maxTime?: string;
    minTime?: string;
    showLeadingZeros?: boolean;
} & Omit<React.ComponentProps<typeof Input>, 'max' | 'min' | 'name'>;
export default function MinuteInput({ hour, maxTime, minTime, showLeadingZeros, ...otherProps }: MinuteInputProps): React.JSX.Element;
export {};
