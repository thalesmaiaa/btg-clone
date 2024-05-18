import { Button } from '@/components/'
import banner from '@/assets/bg-desktop.jpg'

import { Avatar, Box, Typography, styled } from '@mui/material'

type ContainerProps = {
  size: 'small' | 'large'
}

export const Container = styled(Box)<ContainerProps>(({ size = 'large' }) => {
  const height = size === 'small' ? 800 : 900

  return {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height,
  }
})

export const StyledBox = styled(Box)({
  padding: '0px 70px',
  margin: '27px 0px',
})

export const Title = styled(StyledBox)({
  width: '40%',
  fontSize: 40,
  fontWeight: 400,
  letterSpacing: '-0.42px',
  color: 'white',
  lineHeight: '100%',
})

export const Subtitle = styled(StyledBox)({
  width: '40%',
  fontSize: 24,
  fontWeight: 400,
  letterSpacing: '-0.42px',
  color: 'white',
  lineHeight: '125%',
  marginBottom: 48,
})

export const HeadingAction = styled(Button)({
  backgroundColor: '#EFEFEF',
  color: 'black !important',
  padding: '18px 24px',
  fontWeight: 400,
  height: '52px',
  width: 150,
  fontSize: 13,
  '&:hover': {
    backgroundColor: '#EFEFEF',
  },
})

export const WidgetsContent = styled(StyledBox)({
  display: 'flex',
  alignItems: 'center',
  gap: 15,
})

export const Widget = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 12,
})

export const WidgetImage = styled(Avatar)({
  borderRadius: '4px',
  width: '80px',
  height: '80px',
})

export const WidgetText = styled(Typography)({
  width: '65%',
  textDecoration: 'underline',
  fontSize: 14,
  lineHeight: '150%',
  letterSpacing: '0.5px',
  color: 'white',
  fontWeight: 500,
  cursor: 'pointer',
})
