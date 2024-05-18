import { Container as StyledContainer } from '@/components'
import { Widgets } from './Widgets'

import { useMediaQuery } from '@mui/material'

import { Container, HeadingAction, StyledBox, Subtitle, Title } from './styles'

export function BannerSection() {
  const matches = useMediaQuery('(min-width: 1920px)')

  const bannerSize = matches ? 'large' : 'small'

  return (
    <Container component="section" size={bannerSize}>
      <StyledContainer>
        <Title>
          Excelência para ir mais longe com conta corrente, cartão e
          investimentos sob medida
        </Title>
        <Subtitle>
          Transforme sua vida financeira e alcance o topo com soluções que
          superam expectativas e apoio de um Banco completo.
        </Subtitle>
        <StyledBox>
          <HeadingAction variant="contained">Abra sua conta</HeadingAction>
        </StyledBox>
      </StyledContainer>
      <Widgets />
    </Container>
  )
}
