import { default as React } from '../../../node_modules/react';
import { AuxiliaryProps } from '../../utils/utils.types';
import { IconButtonProps } from './IconButton.types';
export declare const IconButton: <C extends React.ElementType>({ component, size, variant, color, disabled, children, className, ...restProps }: AuxiliaryProps<C, IconButtonProps>) => JSX.Element;
