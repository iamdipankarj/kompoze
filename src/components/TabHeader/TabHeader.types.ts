import type { KompozeElement } from '@/utils/utils.types'

export interface TabHeaderProps extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  value?: number | 0,
  onChange: (event: React.SyntheticEvent, value?: any) => void
}
export interface TabHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number | 0
}
