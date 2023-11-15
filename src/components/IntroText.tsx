"use client";

import React, { useState, useEffect, useMemo } from "react";

const IntroText = () => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  const textList: string[] = useMemo(
    () => [
      "Junior Software Developer.",
      "SWD student in Haaga-Helia.",
      "Junior Web Developer.",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && currentText.length < textList[currentIndex].length) {
        setCurrentText((prevText) =>
          textList[currentIndex].substring(0, prevText.length + 1)
        );
      } else {
        setIsDeleting(true);
        setTypingSpeed(80);
        setCurrentText((prevText) =>
          textList[currentIndex].substring(0, prevText.length - 1)
        );
        if (currentText === "") {
          setIsDeleting(false);
          setTypingSpeed(150);
          setCurrentIndex((currentIndex + 1) % textList.length);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [currentText, currentIndex, isDeleting, textList, typingSpeed]);

  return (
    <div className="w-fit">
      <p className="text-secondary-foreground font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl border-r-[1px] border-accent pr-1">
        {"> " + currentText}
      </p>
    </div>
  );
};

export default IntroText;
