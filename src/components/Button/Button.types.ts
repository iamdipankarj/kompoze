import React from 'react'
import type { KompozeButtonAppearance, KompozeColor, KompozeElementSize, KompozeElement } from '@/utils/utils.types'

export interface ButtonProps extends KompozeElement {
  /**
   * Size of the button
   */
  size?: KompozeElementSize
  /**
   * Filled, outilined or default
   */
  variant?: KompozeButtonAppearance
  /**
   * The color: Either from ThemeProvider or props
   */
  color?: KompozeColor
  /** Left Icon */
  startIcon?: React.ReactNode | null
  /** Right Icon */
  endIcon?: React.ReactNode | null
  /** Enable elevation */
  shadow?: boolean
  /** If `true`, the button will take up the full width of
   * it's container
   */
  fullWidth?: boolean
  /**
   * Button orientation
   */
  vertical?: boolean
  /**
   * Any custom border radius you may want
   */
  borderRadius?: number
  /**
   * Is this a disabled button?
   */
  disabled?: boolean
  classList?: {
    iconLeftClass?: string
    labelClass?: string
    iconRightClass?: string
    labelRootClass?: string
  }
}
