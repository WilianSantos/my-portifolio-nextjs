'use client'

import { useRef } from 'react'

export function Button({
  children,
  isGreen = false,
  type = 'button'
}: {
  children: React.ReactNode
  isGreen?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn = buttonRef.current
    const span = spanRef.current
    if (!btn || !span) return

    const rect = btn.getBoundingClientRect()
    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top

    span.style.left = `${offsetX}px`
    span.style.top = `${offsetY}px`

    // Ativa o "efeito de expansão"
    span.style.width = '1200px'
    span.style.height = '1200px'
  }

  const handleMouseLeave = () => {
    const span = spanRef.current
    if (!span) return

    // Volta ao estado inicial
    span.style.width = '0px'
    span.style.height = '0px'
  }

  return (
    <button
      type={type}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        relative z-10 overflow-hidden
        flex items-center justify-center
        min-w-[120px]
        text-white text-[16px] font-medium
        rounded-full tracking-wide
        ${isGreen ? 'bg-green-400' : 'bg-gray-300'} transition-all duration-700 cursor-pointer w-full p-3`}
    >
      {children}
      <span
        ref={spanRef}
        className={`
          absolute w-0 h-0 rounded-full
          ${isGreen ? 'bg-gray-300' : 'bg-green-400'}
          -translate-x-1/2 -translate-y-1/2
          z-[-1]
          transition-[width,height,top,left] duration-700 ease-in-out
          pointer-events-none
          `}
      ></span>
    </button>
  )
}
