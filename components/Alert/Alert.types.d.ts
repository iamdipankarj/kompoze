import { OkElement } from '../../utils/utils.types';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, OkElement {
    variant?: 'success' | 'error';
}
