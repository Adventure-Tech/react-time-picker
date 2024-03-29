import React from 'react';
type AmPmProps = {
    ariaLabel?: string;
    autoFocus?: boolean;
    className: string;
    disabled?: boolean;
    inputRef?: React.RefObject<HTMLSelectElement>;
    locale?: string;
    maxTime?: string;
    minTime?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement> & {
        target: HTMLSelectElement;
    }) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLSelectElement> & {
        target: HTMLSelectElement;
    }) => void;
    required?: boolean;
    value?: string | null;
};
export default function AmPm({ ariaLabel, autoFocus, className, disabled, inputRef, locale, maxTime, minTime, onChange, onKeyDown, required, value, }: AmPmProps): React.JSX.Element;
export {};
