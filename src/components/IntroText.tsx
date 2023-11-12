"use client";

import React, { useState, useEffect, useMemo } from "react";

const IntroText = () => {
  const [currentText, setCurrentText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
      if (currentText.length < textList[currentIndex].length) {
        setCurrentText((prevText) =>
          textList[currentIndex].substring(0, prevText.length + 1)
        );
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex((currentIndex + 1) % textList.length);
        }, 1200);
      }
    }, 130);

    return () => clearInterval(interval);
  }, [currentText, currentIndex, textList]);

  return (
    <div className=" mx-auto">
      <p className="text-secondary-foreground p-1  font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl border-r-2 border-accent inline-block w-full">
        {"> " + currentText}
      </p>
    </div>
  );
};

export default IntroText;
