"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type InViewProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  once?: boolean;
  amount?: number;
  transition?: object;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function InView({
  children,
  className,
  variants = defaultVariants,
  once = true,
  amount = 0.2,
  transition = { duration: 0.6, ease: "easeOut" },
}: InViewProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
