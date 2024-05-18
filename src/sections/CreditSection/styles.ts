import { Box, Grid, styled } from '@mui/material'

import { Button } from '@/components'

export const StyledBox = styled(Box)({
  backgroundColor: 'white',
  padding: '88px 0px',
  color: '#05132a',
})

export const CreditContent = styled(Grid)({
  padding: '0px 70px',
})

export const CreditDescription = styled(Grid)({})

export const CreditDescriptionTitle = styled('h2')({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '42px',
  lineHeight: '125%',
  fontWeight: 600,
  letterSpacing: '-.01em',
  margin: 0,
})

export const CreditDescriptionSubTitle = styled('h3')({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '28px',
  lineHeight: '125%',
  fontWeight: 500,
  letterSpacing: '-.01em',
  marginTop: 24,
  width: '95%',
})

export const Action = styled(Button)({
  marginTop: '48px',
  height: '54px',
  fontWeight: 400,
})

export const CreditCard = styled('img')({
  width: 500,
  height: 320,
})
