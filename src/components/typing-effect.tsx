import React, { useState, useEffect, useMemo, useCallback } from "react";

/**
 * Configuration for individual words in the typing effect
 */
interface WordConfig {
  text: string;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Props for the TypingEffect component
 */
interface TypingEffectProps {
  words: WordConfig[];
  typingSpeed: number;
}

/**
 * A typing effect component that animates text character by character
 * across multiple words with customizable styling for each word.
 */
export const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed,
}) => {
  const [typedText, setTypedText] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Memoize the total expected text for efficient comparison
  const expectedText = useMemo(() => words.map((word) => word.text), [words]);

  // Check if typing is complete using efficient comparison
  const checkIfComplete = useCallback(() => {
    return (
      typedText.length === words.length &&
      typedText.every((text, index) => text === expectedText[index])
    );
  }, [typedText, words.length, expectedText]);
  // Effect to handle completion detection
  useEffect(() => {
    if (checkIfComplete()) {
      setIsComplete(true);
      setIsTyping(false);
    }
  }, [checkIfComplete]);

  // Main typing effect logic
  useEffect(() => {
    if (isComplete) return;

    const currentWord = words[currentWordIndex];
    if (!currentWord) return;

    let timeoutId: NodeJS.Timeout;
    if (currentCharIndex < currentWord.text.length) {
      // Type the next character
      setIsTyping(true);
      timeoutId = setTimeout(() => {
        setTypedText((prevText) => {
          const newText = [...prevText];
          const currentText = newText[currentWordIndex] || "";
          newText[currentWordIndex] =
            currentText + currentWord.text[currentCharIndex];
          return newText;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // Move to next word
      setIsTyping(false);
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentCharIndex, currentWordIndex, words, typingSpeed, isComplete]);
  // Render the typed text with individual styling
  const renderedText = useMemo(() => {
    return typedText.map((text, index) => {
      const { color, style = {} } = words[index] || {};
      return (
        <span key={index} style={{ color, ...style }} className="inline">
          {text}
        </span>
      );
    });
  }, [typedText, words]);
  return (
    <span className="inline-flex items-center">
      {renderedText}
      <span
        className={`text-[#4de9d2] ml-0.5 ${
          isTyping ? "animate-pulse" : "animate-pulse opacity-75"
        }`}
      >
        |
      </span>
    </span>
  );
};
