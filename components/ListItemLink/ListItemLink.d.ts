import { default as React } from '../../../node_modules/react';
import { LinkBaseProps } from './ListItemLink.types';
import { AuxiliaryProps } from '../../utils/utils.types';
export declare const ListItemLink: <C extends React.ElementType>({ component, icon, children, className, ...restProps }: AuxiliaryProps<C, LinkBaseProps>) => JSX.Element;
