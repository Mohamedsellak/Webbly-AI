'use client';
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Crosshair from './Crosshair';
import Ribbons from './Ribbons';
import SplashCursor from './SplashCursor';

import { TargetAndTransition, VariantLabels } from "framer-motion";

interface RotatingTextProps {
  texts: string[];
  mainClassName?: string;
  staggerFrom?: "first" | "last";
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  staggerDuration?: number;
  splitLevelClassName?: string;
  transition?: object;
  rotationInterval?: number;
}

const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  mainClassName = "",
  staggerFrom = "last",
  initial = { y: "100%" },
  animate = { y: 0 },
  exit = { y: "-120%" },
  staggerDuration = 0.025,
  splitLevelClassName = "",
  transition = { type: "spring", damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  // Split text into characters for animation
  const splitText = (text: string) => text.split("");

  return (
    <div className={mainClassName} style={{ display: "flex", alignItems: "center" }}>
      <div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
        <Ribbons
          baseThickness={30}
          colors={['#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
        <div ref={containerRef} style={{ height: '300px', overflow: 'hidden' }}>
          <Crosshair containerRef={containerRef} color='#ffffff' />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={texts[index]}
            style={{ display: "flex" }}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ ...transition, staggerChildren: staggerDuration, staggerDirection: staggerFrom === "last" ? -1 : 1 }}
          >
            {splitText(texts[index]).map((char, i) => (
              <motion.span
                key={i}
                className={splitLevelClassName}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
        <SplashCursor />
      </div>
    </div>
  );
};

export default RotatingText;
