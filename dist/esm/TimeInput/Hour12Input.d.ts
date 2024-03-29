import React from 'react';
import Input from './Input.js';
import type { AmPmType } from '../shared/types.js';
type Hour12InputProps = {
    amPm: AmPmType | null;
    maxTime?: string;
    minTime?: string;
    value?: string | null;
} & Omit<React.ComponentProps<typeof Input>, 'max' | 'min' | 'name' | 'nameForClass'>;
export default function Hour12Input({ amPm, maxTime, minTime, value, ...otherProps }: Hour12InputProps): React.JSX.Element;
export {};
