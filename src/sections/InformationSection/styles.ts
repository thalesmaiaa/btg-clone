import { Button } from '@/components'

import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)({
  backgroundColor: '#E6E7EA',
  padding: '88px 0px',
  color: '#05132a',
})

export const Heading = styled('h2')({
  padding: '0px 70px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '42px',
  lineHeight: '125%',
  fontWeight: 600,
  letterSpacing: '-.01em',
  margin: 0,
})

export const SubHeading = styled('h3')({
  padding: '0px 70px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '28px',
  lineHeight: '125%',
  fontWeight: 500,
  margin: 0,
  marginTop: '24px',
  maxWidth: 700,
})

export const Action = styled(Button)({
  margin: '48px 0px 0px 70px',
  height: '54px',
  fontWeight: 400,
})
