import { default as React } from '../../../node_modules/react';
import { ListViewProps } from './ListView.types';
import { AuxiliaryProps } from '../../utils/utils.types';
export declare const ListView: <C extends React.ElementType>({ component, children, className, gutter, ...restProps }: AuxiliaryProps<C, ListViewProps>) => JSX.Element;
