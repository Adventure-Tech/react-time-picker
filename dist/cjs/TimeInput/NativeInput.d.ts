import React from 'react';
type NativeInputProps = {
    ariaLabel?: string;
    disabled?: boolean;
    maxTime?: string;
    minTime?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    value?: string | Date | null;
    valueType: 'hour' | 'minute' | 'second';
};
export default function NativeInput({ ariaLabel, disabled, maxTime, minTime, name, onChange, required, value, valueType, }: NativeInputProps): React.JSX.Element;
export {};
