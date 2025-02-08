import React from 'react'
import type { ReactNode } from 'react'

export interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  startAdornment?: ReactNode | null
  endAdornment?: ReactNode | null
  classList?: { input?: string, container?: string }
  inputRef?: React.RefObject<HTMLInputElement>
}
