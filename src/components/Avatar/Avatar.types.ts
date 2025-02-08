export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Path to the image */
  src?: string
  /** Diameter to the image */
  size?: number
}
