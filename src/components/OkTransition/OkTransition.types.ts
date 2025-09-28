import type { KompozeTransitionType, KompozeElement } from '@/utils/utils.types'

export interface OkTransitionProps extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  anchor?: KompozeTransitionType
  show?: boolean
  unmountOnExit?: boolean
  modal?: boolean
}
