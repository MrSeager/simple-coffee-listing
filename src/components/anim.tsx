import { useSpring } from '@react-spring/web';

export const useHover = ( hover: boolean, scl: number ) => 
    useSpring({
        scale: hover ? scl : 1,
        config: { tension: 110, friction: 10 },
    });

export const useHoverCard = ( hover: boolean ) => 
    useSpring({
        opacity: hover ? 1 : 0,
        config: { tension: 110, friction: 10 },
    });

export const useRotation = (duration: number = 8000) =>
    useSpring({
        from: { rotate: 0 },
        to: { rotate: 360 },
        loop: true,
        config: { duration },
    });

export const useFirstHandStyle = ( hovered: boolean ) =>
    useSpring({
        transform: hovered 
            ? 'translate(-10%, 3%) rotate(-15deg)' 
            : 'translate(0%, 0%) rotate(0deg)',
        opacity: 1,
    });

export const useSecondHandStyle = ( hovered: boolean ) => 
    useSpring({
        transform: hovered 
            ? 'translate(15%, 5%) rotate(15deg)' 
            : 'translate(50%, 30%) rotate(35deg)',
        opacity: hovered ? 1 : 0,
    });