export interface KompozeElement {
  classList?: object
}

export type KompozeTransitionType = 'fadeScale' | 'fade' | 'bottom' | 'right' | 'left' | 'center'

export type KompozeElementSize = 'small' | 'medium' | 'large'

export type KompozeColor = 'default' | 'primary' | 'secondary' | 'bahama' | 'grayscale'

export type KompozeButtonAppearance = 'text' | 'filled' | 'outlined'

export type kompozeShimmerType = 'rectangle' | 'circle'

export type ValueOf<T> = T[keyof T]

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
  > = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithRef<C>>

type AsProp<C extends React.ElementType> = {
  component?: C
}

/**
 * Override duplicate props
 */
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {}
  > = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>

/**
* Allow <ElementType /> default html props (aria, role... etc.)
*/
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {}
  > = ExtendableProps<PropsOf<C>, Props>

/**
* Create union of JSX Intrinsic element props
* and custom props
*/
export type AuxiliaryProps<
  C extends React.ElementType,
  Props = {}
  > = InheritableElementProps<C, Props & AsProp<C>>

/**
 * Make keys of a Record type optional
 * @example
 * Record<'a' | 'b' | 'c', number>
 */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}
