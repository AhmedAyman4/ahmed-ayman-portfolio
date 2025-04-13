'use client';

import React, {useState, useEffect} from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({text, delay = 150}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer); // Clear the timer if the component unmounts
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {displayedText}
      <span className="inline-block animate-pulse cursor-pointer">|</span>
    </span>
  );
};

