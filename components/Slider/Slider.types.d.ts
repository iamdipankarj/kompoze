export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: number;
    loop?: boolean;
    showArrows?: boolean;
    showNav?: boolean;
    navPosition?: 'top' | 'bottom';
    autoTransition?: boolean;
    autoTransitionDelay?: number;
    classList?: {
        navClass?: string;
        navBtnClass?: string;
        navBtnActiveClass?: string;
        containerClass?: string;
        slidesContainerClass?: string;
    };
    highlightVisited?: boolean;
    onSlideChange?: (index: number) => void;
}
export interface ISliderData {
    dragStart: number;
    index: number;
    lastIndex: number;
    transition: boolean;
    dragStartTime: Date;
    slideWidth: number;
}
export type UIDomEvent = React.MouseEvent & React.TouchEvent;
