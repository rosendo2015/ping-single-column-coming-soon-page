import { tv } from 'tailwind-variants'

export const pageStyles = tv({
  slots: {
    root: 'mx-auto flex min-h-svh w-[calc(100%-3.5rem)] max-w-[640px] flex-col items-center pt-20 pb-8 text-center min-[601px]:w-[calc(100%-3rem)]',
    header: 'mb-9 min-[601px]:mb-10',
    logo: 'block h-auto w-[86px]',
    content: 'w-full',
    subtitle: 'mt-3',
    form: 'mt-8 grid grid-cols-1 items-start gap-3 min-[601px]:grid-cols-[minmax(0,1fr)_200px] min-[601px]:gap-4',
    confirmation: 'mt-3 text-sm text-ping-blue',
    illustration: 'mt-[72px] block h-auto w-full min-[601px]:mt-[88px]',
    footer: 'mt-auto pt-24 min-[601px]:pt-16',
    socialLinks: 'mb-6 flex justify-center gap-3',
    socialLink:
      'grid size-8 place-items-center rounded-full border border-ping-blue-200 text-base font-semibold text-ping-blue transition-colors duration-150 hover:bg-ping-blue hover:text-white',
  },
  variants: {
    formLayout: {
      inline: {
        form: 'min-[601px]:grid-cols-[minmax(0,1fr)_200px]',
      },
      stacked: {
        form: 'min-[601px]:grid-cols-1',
      },
    },
  },
  defaultVariants: {
    formLayout: 'inline',
  },
})