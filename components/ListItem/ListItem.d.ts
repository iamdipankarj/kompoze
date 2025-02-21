import { default as React } from '../../../node_modules/react';
import { ListItemProps } from './ListItem.types';
import { AuxiliaryProps } from '../../utils/utils.types';
export declare const ListItem: <C extends React.ElementType>({ component, icon, primary, secondary, className, endAdornment, classList, ...restProps }: AuxiliaryProps<C, ListItemProps>) => JSX.Element;
