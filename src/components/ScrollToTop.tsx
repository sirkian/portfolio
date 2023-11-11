"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={`fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 p-2 bg-accent text-2xl text-secondary font-extrabold rounded-full ${
        isVisible ? "visible animate-in" : "invisible"
      }`}
      onClick={scrollToTop}>
      ↑
    </Button>
  );
};

export default ScrollToTopButton;
