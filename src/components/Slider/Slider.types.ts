export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  selected?: number
  loop?: boolean
  showArrows?: boolean
  showNav?: boolean
  navPosition?: 'top' | 'bottom', // Position of nav buttons w.r.t. to the slides
  autoTransition?: boolean // If 'true', slide transition will take place automatically
  autoTransitionDelay?: number // For autoTransition 'true', automatic slide transition after each autoTransitionDelay ms
  classList?: {
    navClass?: string
    navBtnClass?: string
    navBtnActiveClass?: string
    containerClass?: string
    slidesContainerClass?: string
  }
  highlightVisited?: boolean // If 'true', highlight the visited slide nav buttons, else only highlight the active slide nav button
  onSlideChange?: (index: number) => void // Callback function that is fired when the slider's current index changes.
}

export interface ISliderData {
  dragStart: number
  index: number
  lastIndex: number
  transition: boolean
  dragStartTime: Date
  slideWidth: number
}

export type UIDomEvent = React.MouseEvent & React.TouchEvent
