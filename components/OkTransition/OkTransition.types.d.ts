import { ITransitionType, OkElement } from '../../utils/utils.types';
export interface OkTransitionProps extends React.HTMLAttributes<HTMLDivElement>, OkElement {
    anchor?: ITransitionType;
    show?: boolean;
    unmountOnExit?: boolean;
    modal?: boolean;
}
