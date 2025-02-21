export interface TransactionInputProps extends React.HTMLAttributes<HTMLDivElement> {
    onChangeValue?: (value: number) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    iconColor?: string;
    helperText?: string | null;
    value?: any;
}
