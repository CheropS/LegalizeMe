"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative group z-10",
  {
    variants: {
      variant: {
        default: "bg-black/50 backdrop-blur-sm text-white hover:text-blue-400 hover:scale-105 border border-white/10",
        destructive: "bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:scale-105 border border-red-500/20",
        outline: "bg-black/50 backdrop-blur-sm text-white border border-white/10 hover:text-blue-400 hover:scale-105 hover:border-blue-400/30",
        secondary: "bg-black/30 backdrop-blur-sm text-gray-300 hover:text-white hover:scale-105 border border-white/5",
        ghost: "hover:bg-black/20 hover:text-blue-400 hover:scale-105",
        link: "text-blue-400 underline-offset-4 hover:underline hover:text-blue-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" />
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
