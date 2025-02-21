import { default as React, CSSProperties } from '../../../node_modules/react';
export interface OTPInputProps extends React.HTMLAttributes<HTMLDivElement> {
    length: number;
    onOTPChange: (otp: string) => void;
    autoFocus?: boolean;
    isNumberInput?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    className?: string;
    inputStyle?: CSSProperties;
    error?: boolean;
}
export interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    focus?: boolean;
    filled?: boolean;
    error?: boolean;
}
