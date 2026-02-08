export type TiltImageMotionProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    tiltRange?: { x: [number, number]; y: [number, number] };
    overlayText?: string;
};