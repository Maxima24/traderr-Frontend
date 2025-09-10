import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
      return (
            <div className={twMerge(`w-full scrollbar-custom relative  h-full max-h-[86dvh] pb-12 overflow-auto bg-[#1A1D29] md:rounded-xl text-white`, className)}>{children}</div>
      )
}

export default Container