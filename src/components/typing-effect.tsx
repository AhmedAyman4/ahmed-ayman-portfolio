import React, { useState, useEffect, useRef } from "react";

export const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed,
}) => {
  const [typedText, setTypedText] = useState<string[]>([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [finished, setFinished] = useState(false); // Add state for tracking finished status
  const isTyping = useRef(false);
  const isFinished = useRef(false);

  useEffect(() => {
    if (typedText.length === words.length) {
      let allWordsMatch = true;
      for (let i = 0; i < words.length; i++) {
        if (typedText[i] !== words[i].text) {
          allWordsMatch = false;
          break;
        }
      }
      if (allWordsMatch) {
        isFinished.current = true;
        setFinished(true); // Also set the state variable
      }
    }
  }, [typedText, words]);

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
        setFinished(true); // Update the state to trigger re-render
      }
    }
  }, [charIndex, wordIndex, words, typingSpeed]);

  return (
    <span className="inline-flex items-center">
      {typedText.map((text, index) => {
        const { color, style = {} } = words[index] || {};
        return (
          <span key={index} style={{ color, ...style }} className="inline">
            {text}
          </span>
        );
      })}
      {finished && ( // Use the state variable instead of ref for rendering
        <span className="animate-pulse text-[#4de9d2]">|</span>
      )}
    </span>
  );
};
