"use client"

import React, { useState, useRef, useEffect } from 'react';

export default function Tooltip({ children, content }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState('top');
  const tooltipRef = useRef(null);
  const triggerRef = useRef(null);

  // Calculate position based on available space
  useEffect(() => {
    if (isVisible && tooltipRef.current && triggerRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      // Check if tooltip would go off the top of the screen
      const spaceAbove = triggerRect.top;
      const spaceBelow = viewportHeight - triggerRect.bottom;
      
      // Check if tooltip would go off the sides
      const tooltipWidth = tooltipRect.width;
      const centerPoint = triggerRect.left + (triggerRect.width / 2);
      const wouldOverflowLeft = centerPoint - (tooltipWidth / 2) < 0;
      const wouldOverflowRight = centerPoint + (tooltipWidth / 2) > viewportWidth;
      
      // Set position based on available space
      if (spaceAbove < tooltipRect.height && spaceBelow >= tooltipRect.height) {
        setPosition('bottom');
      } else if (spaceBelow < tooltipRect.height && spaceAbove >= tooltipRect.height) {
        setPosition('top');
      } else if (wouldOverflowLeft) {
        setPosition('right');
      } else if (wouldOverflowRight) {
        setPosition('left');
      } else {
        // Default to top if there's enough space
        setPosition(spaceBelow >= tooltipRect.height ? 'bottom' : 'top');
      }
    }
  }, [isVisible]);

  // Get position-specific classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2';
    }
  };

  // Get arrow position classes
  const getArrowClasses = () => {
    switch (position) {
      case 'top':
        return 'absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800';
      case 'bottom':
        return 'absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800';
      case 'left':
        return 'absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-gray-800';
      case 'right':
        return 'absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-800';
      default:
        return 'absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800';
    }
  };

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        className="cursor-help border-b border-dotted border-gray-400"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </span>
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={`absolute ${getPositionClasses()} w-[150px] aspect-square p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-50 flex items-center justify-center overflow-hidden`}
        >
          <div className="relative flex flex-col items-center justify-center h-full">
            <div className="font-bold mb-1 text-blue-400">What's a token?</div>
            <div className="text-center text-xs">{content}</div>
            <div className={getArrowClasses()}></div>
          </div>
        </div>
      )}
    </span>
  );
}
