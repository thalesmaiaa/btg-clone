import { Avatar, Box, Grid, Typography, styled } from '@mui/material'

export const Root = styled(Grid)({
  padding: '0px 70px',
  marginTop: '40px',
})

export const Item = styled(Grid)({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: 4,
  minWidth: 260,
  background: 'white',
})

export const Icon = styled(Avatar)({
  borderRadius: 0,
  width: 48,
  height: 48,
})

export const Title = styled(Typography)({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '18px',
  lineHeight: '125%',
  fontWeight: 500,
  margin: '18px 0px 0px',
})

export const Description = styled(Typography)({
  margin: '8px 0px 0px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '15px',
  lineHeight: '150%',

  fontWeight: 500,
  color: '#69717f',
})

export const Link = styled(Box)({
  margin: '48px 0px 0px',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '15px',
  lineHeight: '150%',
  fontWeight: 600,
})
