import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.8
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-[${Math.round(duration * 1000)}ms]`;
    const delayClass = delay > 0 ? `delay-[${Math.round(delay * 1000)}ms]` : '';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 scale-95`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 -translate-x-8`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-x-8`;
        default:
          return `${baseClasses} ${durationClass} ${delayClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} ${durationClass} ${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};