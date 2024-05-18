import {
  Backdrop,
  Box,
  Popover as MUIPopover,
  Slide,
  useMediaQuery,
} from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import bannerImg from '@/assets/para-voce.webp'

import {
  AccountAction,
  ActionSubtitle,
  ActionTitle,
  ActionsContainer,
  Banner,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
  InvestmentAction,
  PopoverContent,
  StyledList,
  StyledListItem,
  StyledListItemText,
} from './styles'

type PopoverProps = {
  open: boolean
  anchorEl: HTMLDivElement | null
  id?: string
  onClose: () => void
}

export function Popover({ open, anchorEl, id, onClose }: PopoverProps) {
  const matches = useMediaQuery('(min-width: 1920px)')

  const popoverContentSize = matches ? 'large' : 'small'

  return (
    <>
      <MUIPopover
        open={open}
        anchorEl={anchorEl}
        id={id}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              left: '0px !important',
              maxWidth: '100vw',
              borderRadius: 0,
              top: '80px !important',
              boxShadow: 'none',
              borderTop: '1px solid #e6e7ea !important',
              padding: '0px 27px 0px',
              minHeight: 600,
            },
          },
        }}
        TransitionComponent={Slide}
      >
        <PopoverContent size={popoverContentSize}>
          <StyledList>
            {[
              'Investimentos',
              'Análises',
              'Conta e cartão',
              'Crédito',
              'Benefícios',
              'Seguros',
              'Atendimentos',
              'Simuladores',
            ].map((label) => (
              <StyledListItem key={label}>
                <StyledListItemText>{label}</StyledListItemText>
                <ArrowForwardIosIcon
                  sx={{
                    width: '13px',
                    height: '13px',
                    color: 'rgb(43, 116, 223)',
                  }}
                  fontSize="large"
                />
              </StyledListItem>
            ))}
          </StyledList>

          <Banner>
            <BannerImage
              src={bannerImg}
              alt="Banner"
              size={popoverContentSize}
            />

            <Box>
              <BannerTitle>Para você</BannerTitle>

              <BannerSubtitle>
                Conta corrente, cartão e investimentos. Conheça os produtos e
                descubra os benefícios de ser um cliente BTG Pactual.
              </BannerSubtitle>
            </Box>
          </Banner>

          <ActionsContainer>
            <AccountAction>
              <ActionTitle>Abra sua conta corrente</ActionTitle>

              <ActionSubtitle>
                Conta, cartão de crédito e todos os benefícios de ser BTG.
                <ArrowForwardIcon />
              </ActionSubtitle>
            </AccountAction>
            <InvestmentAction>
              <ActionTitle>Abra sua conta de investimentos</ActionTitle>

              <ActionSubtitle>
                Os melhores produtos do mercado na palma da mão.
                <ArrowForwardIcon />
              </ActionSubtitle>
            </InvestmentAction>
          </ActionsContainer>
        </PopoverContent>
      </MUIPopover>

      <Backdrop open={open} onClick={onClose} />
    </>
  )
}
