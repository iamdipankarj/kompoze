---
to: src/components/<%= name %>/<%= name %>.types.ts
---
import { IElementSize, OkElement } from '../../utils/utils.types'

export interface <%= name %>Props extends React.HTMLAttributes<HTMLDivElement>, OkElement {
  size?: IElementSize
}
