export interface OkElement {
    classList?: object;
}
export type ITransitionType = 'fadeScale' | 'fade' | 'bottom' | 'right' | 'left' | 'center';
export type IElementSize = 'small' | 'medium' | 'large';
export type IColor = 'default' | 'primary' | 'secondary' | 'bahama' | 'grayscale';
export type ButtonAppearance = 'text' | 'filled' | 'outlined';
export type IShimmerType = 'rectangle' | 'circle';
export type ValueOf<T> = T[keyof T];
export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithRef<C>>;
type AsProp<C extends React.ElementType> = {
    component?: C;
};
export type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;
export type InheritableElementProps<C extends React.ElementType, Props = {}> = ExtendableProps<PropsOf<C>, Props>;
export type AuxiliaryProps<C extends React.ElementType, Props = {}> = InheritableElementProps<C, Props & AsProp<C>>;
export type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export {};
