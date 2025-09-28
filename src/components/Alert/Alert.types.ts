import type { KompozeElement } from '@/utils/utils.types'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  variant?: 'success' | 'error'
}
