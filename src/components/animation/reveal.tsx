import React, { useEffect, useRef, useState } from 'react';

interface RevealCompProps {
  children: React.ReactNode;
  threshold: number;
  duration: string;
  x?: number;
  y?: number;
}

const RevealComp: React.FC<RevealCompProps> = ({ children, threshold, duration, x = 0, y = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIntersecting(true);
      } else {
        setIntersecting(false);
      }
    }, {
      threshold
    });
 
    
    if (ref.current) {
      intersectionObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        intersectionObserver.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      style={{
        transitionDuration: duration,
        transform: !intersecting ? `translate(${x}px, ${y}px)` : "translate(0px, 0px)"
      }}
      className={`transition-all ${intersecting ? "opacity-100" : "opacity-0"} duration-700`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default RevealComp;
