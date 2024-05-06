import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)} // adicionar css do componente junto com as já presentes
      {...props}
    />
  )
}

// bg-zinc-50/10 animate-pulse rounded-md
// bg-zinc-50/10 
// animate-pulse : diminui e aumenta a opacidade
//  rounded-md