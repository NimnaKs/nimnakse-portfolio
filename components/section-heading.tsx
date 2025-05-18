import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import AnimationWrapper from "./animation-wrapper"

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  className, 
  ...props 
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)} {...props}>
      <AnimationWrapper>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>
      </AnimationWrapper>
      
      {subtitle && (
        <AnimationWrapper delay={0.1}>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimationWrapper>
      )}
    </div>
  )
}