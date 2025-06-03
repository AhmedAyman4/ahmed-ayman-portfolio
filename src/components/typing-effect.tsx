import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

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
  const [displayText, setDisplayText] = useState<string>("");
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  // Use refs to avoid unnecessary re-renders
  const currentWordIndexRef = useRef(0);
  const currentCharIndexRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Adjust typing speed based on device type for better performance
  const adjustedTypingSpeed = useMemo(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    return isMobile ? typingSpeed : Math.max(typingSpeed * 0.7, 20); // Faster on desktop
  }, [typingSpeed]); // Optimized typing effect using requestAnimationFrame for smoother animation
  useEffect(() => {
    if (isComplete) return;

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= adjustedTypingSpeed) {
        const currentWordIndex = currentWordIndexRef.current;
        const currentCharIndex = currentCharIndexRef.current;
        const currentWord = words[currentWordIndex];

        if (currentWord && currentCharIndex < currentWord.text.length) {
          setIsTyping(true);
          setDisplayText((prev) => prev + currentWord.text[currentCharIndex]);
          currentCharIndexRef.current++;
        } else if (currentWordIndex < words.length - 1) {
          // Add space between words and move to next word
          setDisplayText((prev) => prev + " ");
          currentWordIndexRef.current++;
          currentCharIndexRef.current = 0;
          setIsTyping(false);
        } else {
          setIsComplete(true);
          setIsTyping(false);
          return;
        }
        lastTime = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [words, adjustedTypingSpeed, isComplete]); // Render with better performance
  const renderedText = useMemo(() => {
    let textIndex = 0;
    return words.map((word, wordIndex) => {
      const wordLength = word.text.length;
      const wordText = displayText.slice(textIndex, textIndex + wordLength);
      textIndex += wordLength + 1; // +1 for space

      const { color, style = {} } = word;
      return (
        <span key={wordIndex} style={{ color, ...style }} className="inline">
          {wordText}
          {wordIndex < words.length - 1 && wordText.length === wordLength
            ? " "
            : ""}
        </span>
      );
    });
  }, [displayText, words]);
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
