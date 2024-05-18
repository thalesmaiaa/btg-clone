import { ComponentProps, forwardRef } from 'react'

import { Button as MUIButton } from '@mui/material'

import { ContainedButton, OutlinedButton } from './styles'

type ButtonProps = ComponentProps<typeof MUIButton>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'outlined', ...props }, ref) => {
    return (
      <>
        {variant === 'contained' && <ContainedButton {...props} ref={ref} />}
        {variant === 'outlined' && <OutlinedButton {...props} ref={ref} />}
      </>
    )
  },
)

Button.displayName = 'Button'
