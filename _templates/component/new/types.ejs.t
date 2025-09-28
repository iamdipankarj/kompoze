---
to: src/components/<%= name %>/<%= name %>.types.ts
---
import { KompozeElementSize, KompozeElement } from '@/utils/utils.types'

export interface <%= name %>Props extends React.HTMLAttributes<HTMLDivElement>, KompozeElement {
  size?: KompozeElementSize
}
