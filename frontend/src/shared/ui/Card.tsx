import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.HTMLAttributes<HTMLDivElement>) => {
      return (
            <div {...props} className={twMerge('bg-[#2B2D44] p-3 rounded-lg', className)}>{children}</div>
      )
}

export default Card