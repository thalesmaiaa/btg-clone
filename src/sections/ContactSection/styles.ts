import { Avatar, Box, Grid, Typography, styled } from '@mui/material'

export const Container = styled(Box)({
  background: '#05132a',
  marginTop: 0,
  padding: '48px 0px',
})

export const LogoItem = styled(Grid)({
  marginBottom: '48px',
})

type SectionItemProps = {
  size?: string
}

export const SectionItem = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'size',
})<SectionItemProps>(({ size = 'small' }) => {
  if (size === 'large') {
    return {
      maxWidth: '580px !important',
      marginRight: '100px',
      width: '580px !important',
    }
  }

  if (size === 'medium') {
    return {
      maxWidth: '360px !important',
      marginRight: '100px',
      width: '360px !important',
      flexBasis: 'auto !important',
    }
  }

  return {
    maxWidth: '320px !important',
    marginRight: '100px',
  }
})

type SectionHeadingProps = {
  borders?: boolean
}

export const SectionHeading = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'borders',
})<SectionHeadingProps>(({ borders = true }) => ({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '150%',
  letterSpacing: 'normal',
  color: '#fff',
  borderBottom: borders ? '1px solid white' : 'none',
  padding: '0 0 4px',
  margin: '0px 0px 24px',
}))

export const IconChat = styled(Avatar)({
  width: 42,
  height: 42,
  borderRadius: 0,
})

type SectionActionsProps = {
  displayFlex?: boolean
  rowSize?: number
}

export const SectionActions = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'displayFlex' && prop !== 'rowSize',
})<SectionActionsProps>(({ displayFlex, rowSize = 3 }) => {
  if (displayFlex) {
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }
  }

  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${rowSize}, 1fr)`,
    gridRowGap: '8px',
    gridColumnGap: '16px',
  }
})

type SectionActionItemProps = {
  decoration?: 'underline'
}

export const SectionActionItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'decoration',
})<SectionActionItemProps>(() => ({
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '125%',
  color: '#fff',
  margin: 0,
  padding: 0,
  textDecoration: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  gap: 16,
}))

export const SectionDescription = styled(SectionActionItem)({
  color: '#ffffffb2',
  textDecoration: 'dashed',
})
