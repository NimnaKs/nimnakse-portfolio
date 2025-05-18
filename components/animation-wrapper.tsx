"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export default function AnimationWrapper({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimationWrapperProps) {
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: 50, opacity: 0 }
      case "down":
        return { y: -50, opacity: 0 }
      case "left":
        return { x: 50, opacity: 0 }
      case "right":
        return { x: -50, opacity: 0 }
      default:
        return { y: 50, opacity: 0 }
    }
  }

  return (
    <motion.div
      initial={getDirectionVariants()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}