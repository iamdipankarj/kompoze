import type { OkElement } from '../../utils/utils.types'

export interface TabHeaderProps extends React.HTMLAttributes<HTMLDivElement>, OkElement {
  value?: number | 0,
  onChange: (event: React.SyntheticEvent, value?: any) => void
}
export interface TabHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number | 0
}
