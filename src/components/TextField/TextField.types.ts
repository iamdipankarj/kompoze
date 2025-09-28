import React from 'react'
import type { KompozeElement } from '@/utils/utils.types'

export interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  error?: boolean
  type?: string
  name?: string
  helperText?: string | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  startAdornment?: React.ReactNode | null
  endAdornment?: React.ReactNode | null
  value?: any
  required?: boolean
  label?: string
  disabled?: boolean
}
export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  error?: boolean
}
