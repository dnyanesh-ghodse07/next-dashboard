"use client";

import { debounce } from "@/utilities/debounce";
import { useEffect, useState } from "react";
type Props = { width: number; height: number };

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<Props>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if(typeof window === 'undefined') return;

    const handleSize = debounce(() => {
      const width = innerWidth;
      const height = innerHeight;
      setScreenSize({
        height,
        width,
      });
    }, 50);

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
