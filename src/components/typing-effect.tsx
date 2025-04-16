import React, { useState, useEffect, useRef } from "react";

interface Word {
  text: string;
  color: string;
  style?: React.CSSProperties; // Add optional style property
}

interface TypingEffectProps {
  words: Word[];
  typingSpeed: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed,
}) => {
  const [typedText, setTypedText] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const isTyping = useRef(false);
  const isFinished = useRef(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (!currentWord) return;

    if (charIndex < currentWord.text.length) {
      const timeout = setTimeout(() => {
        setTypedText((prevText) => {
          const newText = [...prevText];
          newText[wordIndex] =
            (newText[wordIndex] || "") + currentWord.text[charIndex];

          return newText;
        });
        setCharIndex((prevIndex) => prevIndex + 1);
        isTyping.current = true;
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      isTyping.current = false;
      if (wordIndex < words.length - 1) {
        setWordIndex((prevWordIndex) => prevWordIndex + 1);
        setCharIndex(0);
      } else {
        isFinished.current = true;
      }
    }
  }, [charIndex, wordIndex, words, typingSpeed]);

  return (
    <span className="inline-flex items-center">
      {typedText.map((text, index) => {
        // Get both color and custom style from the current word
        const { color, style = {} } = words[index] || {};
        return (
          <span
            key={index}
            style={{ color, ...style }} // Combine color and custom styles
            className="inline"
          >
            {text}
          </span>
        );
      })}
      {isFinished.current && (
        <span className="animate-pulse text-[#4de9d2]">|</span>
      )}
    </span>
  );
};
