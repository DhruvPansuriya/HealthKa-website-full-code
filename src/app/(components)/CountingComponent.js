import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const CountingComponent = ({n}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const finalValue = n;

    // react-spring animation config
    const { number } = useSpring({
        number: isVisible ? finalValue : 0,
        from: { number: 0 },
        delay: 100,
        onRest: () => console.log('Animation complete!'),
    });

    // IntersectionObserver hook
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.7, // Trigger when 50% of the element is visible
    });

    // Update state when element is in view
    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <div ref={ref} className="text-4xl font-bold">
            <animated.span>{number.interpolate(val => Math.floor(val).toLocaleString())}</animated.span>
        </div>
    );
};

export default CountingComponent;
