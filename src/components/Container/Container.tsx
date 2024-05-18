import { ComponentProps } from 'react'

import { Box, useMediaQuery } from '@mui/material'

import { StyledContainer } from './styles'

type ContainerProps = ComponentProps<typeof Box>

export function Container(props: ContainerProps) {
  const matches = useMediaQuery('(min-width: 1920px)')

  return <StyledContainer {...props} size={matches ? 'large' : 'small'} />
}
