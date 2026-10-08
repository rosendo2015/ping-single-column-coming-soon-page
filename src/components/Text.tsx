import type { ElementType, HTMLAttributes } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const textStyles = tv({
  base: 'm-0',
  variants: {
    variant: {
      title:
        'text-[28px] leading-[1.2] font-light text-ping-gray min-[601px]:text-[48px]',
      body: 'text-base leading-[1.5] font-light text-ping-ink min-[601px]:text-xl',
      caption: 'text-xs leading-[1.5] text-ping-gray',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
} & VariantProps<typeof textStyles>

function Text({
  as: Element = 'p',
  variant,
  className,
  ...props
}: TextProps) {
  return (
    <Element className={textStyles({ variant, className })} {...props} />
  )
}

export default Text