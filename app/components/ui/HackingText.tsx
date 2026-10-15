"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/\\";

const centerPad = (str: string, len: number) => {
  const padLen = len - str.length;
  if (padLen <= 0) return str;
  const leftPad = Math.floor(padLen / 2);
  const rightPad = padLen - leftPad;
  return "\u00A0".repeat(leftPad) + str + "\u00A0".repeat(rightPad);
};

export default function HackingText({ words, duration = 3000 }: { words: string[], duration?: number }) {
  const maxLen = useMemo(() => Math.max(...words.map(w => w.length)), [words]);
  const [displayText, setDisplayText] = useState(() => centerPad(words[0], maxLen));
  const indexRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = useCallback(() => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
  }, []);

  const scrambleTo = useCallback((nextWord: string) => {
    let iter = 0;
    const totalFrames = 30;
    const padded = centerPad(nextWord, maxLen);
    
    // Calculate padding sizes to know where to scramble
    const padLen = maxLen - nextWord.length;
    const leftPad = Math.floor(padLen / 2);
    const rightPad = padLen - leftPad;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (iter >= totalFrames) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(padded);

        // Schedule next word
        timeoutRef.current = setTimeout(() => {
          indexRef.current = (indexRef.current + 1) % words.length;
          scrambleTo(words[indexRef.current]);
        }, duration);

        return;
      }

      const scrambled = Array(maxLen)
        .fill(0)
        .map((_, i) => {
          if (i < leftPad || i >= maxLen - rightPad) return "\u00A0"; // It's padding
          
          const charIdxInWord = i - leftPad;
          const resolveProgress = (iter / totalFrames) * nextWord.length;
          
          if (charIdxInWord < resolveProgress) {
            return nextWord[charIdxInWord];
          } else {
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        })
        .join("");

      setDisplayText(scrambled);
      iter++;
    }, 40);
  }, [maxLen, words, duration]);

  useEffect(() => {
    // Start the first cycle after the initial duration
    timeoutRef.current = setTimeout(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      scrambleTo(words[indexRef.current]);
    }, duration);

    return clearTimers;
  }, [words, duration, scrambleTo, clearTimers]);

  return <span className="font-mono text-ssg-red uppercase font-bold tracking-widest inline-block whitespace-nowrap">{displayText}</span>;
}


