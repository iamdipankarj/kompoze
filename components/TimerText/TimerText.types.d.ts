import { default as React } from '../../../node_modules/react';
export type ITimeFormat = 'hh:mm:ss' | 'mm:ss';
export interface TimerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    endTime: number;
    format?: ITimeFormat;
    onFinish?: () => void;
}
