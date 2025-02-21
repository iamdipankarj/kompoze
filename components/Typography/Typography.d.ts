import { default as React } from '../../../node_modules/react';
import { TypographyProps } from './Typography.types';
import { AuxiliaryProps } from '../../utils/utils.types';
export declare const Typography: <C extends React.ElementType>({ component, children, className, color, gutterBottom, noWrap, align, ...props }: AuxiliaryProps<C, TypographyProps>) => JSX.Element;
