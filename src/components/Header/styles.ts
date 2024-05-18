import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Typography,
  styled,
} from '@mui/material'

export const Container = styled(AppBar)({
  padding: '0px 28px',
  background: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'initial',
  height: '80px',
})

export const Logo = styled('img')({
  width: '122px',
  height: '48px',
  marginRight: '50px',
  cursor: 'pointer',
})

export const Navbar = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flex: 1,
  height: '100%',
})

export const InfosContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 25,
  cursor: 'pointer',
  height: 80,
})

// POPOVER

type PopverContentProps = {
  size: 'small' | 'large'
}

export const PopoverContent = styled(Box)<PopverContentProps>(({
  size = 'large',
}) => {
  const gridTemplateColumns =
    size === 'small'
      ? 'minmax(10rem, 20rem) minmax(10rem, 1fr) minmax(15rem, 20rem)'
      : 'minmax(10rem, 20rem) minmax(20rem, 1fr) minmax(15rem, 25rem)'

  return {
    display: 'grid',
    gridTemplateColumns,
  }
})

export const StyledList = styled(List)({
  borderRight: '1px solid #e6e7ea',
  padding: '34px 16px 12px 22px',
})

export const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid #e6e7ea',
  padding: '0px 13px',
  height: '55px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  cursor: 'pointer',
})

export const StyledListItemText = styled('span')({
  color: '#05132a',
  fontSize: '.9375em',
  fontFamily: 'DM Sans, sans-serif',
  lineHeight: '150%',
  fontWeight: 500,
})

export const Banner = styled(Box)({
  padding: '22px',
})

export const BannerImage = styled('img')<PopverContentProps>(({
  size = 'large',
}) => {
  if (size === 'small') {
    return {
      width: '100%',
    }
  }

  return {}
})

export const BannerTitle = styled(Typography)({
  fontSize: '18px',
  lineHeight: '22.5px',
  margin: '1.375rem 0px',
  color: '#05132a',
  fontWeight: 500,
})

export const BannerSubtitle = styled(Typography)({
  fontSize: '13px',
  lineHeight: '16.25px',
  fontWeight: 400,
  color: '#05132a',
})

export const ActionsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  height: 600,
})

export const AccountAction = styled(Box)({
  background: '#05132a',
  padding: '0px 25px',
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})

export const InvestmentAction = styled(Box)({
  background: '#0b2859',
  padding: '0px 25px',
  height: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
})

export const ActionTitle = styled('span')({
  fontSize: '1.125em',
  lineHeight: '125%',
  color: '#fff',
  fontWeight: 600,
})

export const ActionSubtitle = styled(Button)({
  fontSize: '0.83em',
  lineHeight: '150%',
  color: 'white',
  textTransform: 'none',
  textAlign: 'left',
  paddingLeft: 0,
  paddingBottom: 12,
  fontWeight: 600,
  fontFamily: 'DM Sans, sans-serif',
  width: '90%',
})

// ACCOUNT-POPOVER

export const AccountPopoverContainer = styled(Box)({
  padding: '38px 0px 24px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  color: '#05132a',
})

export const AccountPopoverItem = styled(Typography)({
  fontFamily: 'DM Sans, sans-serif',

  fontSize: '15px',
  lineHeight: '150%',
  fontWeight: 500,
  cursor: 'pointer',
  '&:hover': {
    color: '#2b74df',
  },
})
