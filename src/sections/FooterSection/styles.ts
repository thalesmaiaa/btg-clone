import { Button } from '@/components'
import { Box, styled } from '@mui/material'

import StyledCookieIcon from '@mui/icons-material/Cookie'

export const Container = styled('footer')({
  background: '#071833',
  padding: '24px 0px ',
})

export const Content = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
})

export const Typography = styled('p')({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '125%',
  color: '#ffffffb2',
})

export const CookiesButton = styled(Button)({
  background: 'transparent !important',
  padding: '11px 15px 11px 0px',
  justifyContent: 'flex-start',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '15px',
  fontWeight: 500,
  lineHeight: '16px',
  textTransform: 'none',
})

export const CookieIcon = styled(StyledCookieIcon)({
  width: '15px',
  height: '15px',
  margin: '-1px 4px 0px 0px',
})

export const LogosContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})
