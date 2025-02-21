import { OkElement, IColor } from '../../utils/utils.types';
export type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'body1' | 'body2' | 'caption1' | 'caption2' | 'button1' | 'button2' | 'overline' | 'inherit';
export interface TypographyProps extends OkElement {
    variant: Variant;
    align?: Align;
    color?: IColor;
    gutterBottom?: boolean;
    noWrap?: boolean;
}
