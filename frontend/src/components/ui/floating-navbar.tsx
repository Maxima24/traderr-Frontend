"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-[#1E3A8A]/30 rounded-full bg-[#0F172A]/90 backdrop-blur-lg z-[5000] px-6 py-3 items-center justify-center space-x-6",
        className
      )}
    >
      <div className="flex items-center space-x-6">
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="relative text-gray-300 items-center flex hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            {navItem.name}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4 ml-4 border-l border-[#334155] pl-4">
        <a
          href="/auth/trader"
          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          Log in
        </a>
        <button className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#1E3A8A] hover:from-[#0284C7] hover:to-[#172554] text-white text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-sm shadow-[#0EA5E9]/10">
          <span>Connect Wallet</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 12H4M12 4l8 8-8 8" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
