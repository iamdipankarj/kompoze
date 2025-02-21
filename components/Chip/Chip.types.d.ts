import { default as React } from '../../../node_modules/react';
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    clickable?: boolean;
    active?: boolean;
    label?: React.ReactNode;
}
