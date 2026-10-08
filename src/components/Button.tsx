import type { ButtonHTMLAttributes } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyles = tv({
  base: 'inline-flex min-h-14 items-center justify-center rounded-full px-6 font-sans text-base font-semibold text-white shadow-[0_8px_16px_hsl(223_87%_63%_/_22%)] transition-[background-color,transform] duration-150 hover:bg-ping-blue-hover active:translate-y-px focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ping-blue-200 disabled:cursor-wait disabled:opacity-70',
  variants: {
    variant: {
      primary: 'bg-ping-blue',
      secondary: 'bg-ping-ink hover:bg-ping-ink/90',
    },
    size: {
      medium: 'min-h-14 px-6',
      large: 'min-h-16 px-8',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
})

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  )
}

export default Button