export type SnackExitReason = 'timeout' | 'clickaway';
export interface SnackbarProps extends React.HTMLAttributes<HTMLDivElement> {
    action?: React.ReactNode;
    autoHide?: boolean;
    autoHideDuration?: number;
    startAdornment?: React.ReactNode;
    onExit?: (e: React.SyntheticEvent<any>, reason?: SnackExitReason) => void;
}
