import { AppStoreButton, GooglePlayButton } from 'react-mobile-app-button'

import { Avatar, Box, Grid, styled } from '@mui/material'

export const Container = styled(Grid)({})

export const BankingItem = styled(Grid)({
  padding: '110px 70px',
  background: 'linear-gradient(180deg, #307ae0 0%, #0b2859 100%);',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'end',
  gap: 54,
})

export const InvestmentItem = styled(Grid)({
  padding: '110px 70px',
  background: 'linear-gradient(180deg, #05132a 0%, #0b2859 100%);',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'start',

  gap: 54,
})

export const ItemContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
})

export const ItemContentTitle = styled('h2')({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '28px',
  lineHeight: '125%',
  color: 'white',
})

export const ItemContentSubTitle = styled('h3')({
  marginTop: 15,
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '38px',
  fontWeight: 600,
  lineHeight: '125%',
  color: 'white',
})

export const ItemContentActions = styled(Box)({
  marginTop: 48,
  display: 'flex',
  alignItems: 'center',
  gap: 24,
  justifyContent: 'flex-start',
})

export const StyledAvatar = styled(Avatar)({
  width: 180,
  height: 370,
  borderRadius: 0,
})

export const AppleButton = styled(AppStoreButton)({
  background: 'white',
  color: 'black',
  border: 0,
  outline: 'none',
  padding: 6,
})

export const GoogleButton = styled(GooglePlayButton)({
  background: 'white',
  color: 'black',
  border: 0,
  outline: 'none',
  padding: 6,
})
