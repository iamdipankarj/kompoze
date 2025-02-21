export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'static' | 'infinite';
    percentage?: number;
    duration?: number;
    height?: number;
}
