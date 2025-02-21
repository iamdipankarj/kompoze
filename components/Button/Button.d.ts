import { default as React } from '../../../node_modules/react';
import { AuxiliaryProps } from '../../utils/utils.types';
import { ButtonProps } from './Button.types';
export declare const Button: <C extends React.ElementType>({ component, startIcon, endIcon, size, variant, color, fullWidth, shadow, vertical, disabled, borderRadius, children, className, classList, ...restProps }: AuxiliaryProps<C, ButtonProps>) => JSX.Element;
