import { Button as MUIButton, styled } from '@mui/material'

const BaseButton = styled(MUIButton)({
  borderRadius: 4,
  textTransform: 'capitalize',
  fontFamily: 'DM Sans',
  letterSpacing: 0,
  cursor: 'pointer',
})

export const ContainedButton = styled(BaseButton)({
  backgroundColor: '#195ab4',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  width: 170,
  height: 43,
  fontSize: 13,
  lineHeight: '16px',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: '#134487',
  },
})

export const OutlinedButton = styled(BaseButton)({
  color: '#05132a',
  padding: '0px',
  height: 22,
  fontSize: 15,
  fontWeight: 500,
})
