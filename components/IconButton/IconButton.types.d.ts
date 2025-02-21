import { ButtonAppearance, IColor, IElementSize, OkElement } from '../../utils/utils.types';
export interface IconButtonProps extends OkElement {
    size?: IElementSize;
    variant?: ButtonAppearance;
    color?: IColor;
    disabled?: boolean;
}
