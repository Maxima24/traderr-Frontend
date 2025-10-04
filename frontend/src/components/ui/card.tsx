"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group relative bg-slate-900/10 rounded-2xl overflow-hidden backdrop-blur-xl border border-slate-800",
        "transition duration-300 hover:bg-slate-900/20 hover:border-slate-700",
        "hover:shadow-lg hover:shadow-purple-500/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div className={cn("relative z-10 p-8", className)} {...props}>
      {children}
    </div>
  );
}
