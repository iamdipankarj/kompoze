import { default as React } from '../../../node_modules/react';
import { ButtonAppearance, IColor, IElementSize, OkElement } from '../../utils/utils.types';
export interface ButtonProps extends OkElement {
    size?: IElementSize;
    variant?: ButtonAppearance;
    color?: IColor;
    startIcon?: React.ReactNode | null;
    endIcon?: React.ReactNode | null;
    shadow?: boolean;
    fullWidth?: boolean;
    vertical?: boolean;
    borderRadius?: number;
    disabled?: boolean;
    classList?: {
        iconLeftClass?: string;
        labelClass?: string;
        iconRightClass?: string;
        labelRootClass?: string;
    };
}
