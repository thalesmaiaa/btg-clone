import { Box, styled } from '@mui/material'

type StyledContainerProps = {
  size: 'small' | 'large'
}

export const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'size',
})<StyledContainerProps>(({ size = 'large' }) => {
  return {
    width: size === 'small' ? '100%' : '80%',
    margin: '40px auto',
  }
})
