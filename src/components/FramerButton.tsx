"use client";

import { motion, Variants } from "framer-motion";
import cn from "@/lib/utils/classname";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClickChange?: () => void;
}

const firstTextVariant: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -40,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant: Variants = {
  initial: {
    y: 40,
  },
  hover: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 40,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const FramerButton = ({
  children,
  className,
  onClickChange,
}: ButtonProps) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      className={cn("", className)}
      onClick={onClickChange}
    >
      <div className="w-full h-full overflow-hidden relative flex justify-center items-center">
        <motion.p variants={firstTextVariant} className="">
          {children}
        </motion.p>
        <motion.p
          variants={secondTextVariant}
          aria-hidden
          className="absolute text-muted-foreground"
        >
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};
