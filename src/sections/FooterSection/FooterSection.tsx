import { Container as StyledContainer } from '@/components'

import b3 from '@/assets/selo-b3.png'
import b3Retail from '@/assets/selo-b3-retail-broker.png'
import anbima from '@/assets/ambima.png'
import anbimaRegulacao from '@/assets/autorregulacao-anbima.png'
import reclameAqui from '@/assets/reclame-aqui.png'

import { Box, useMediaQuery } from '@mui/material'

import {
  Container,
  Content,
  CookieIcon,
  CookiesButton,
  LogosContainer,
  Typography,
} from './styles'

export function FooterSection() {
  const matches = useMediaQuery('(min-width: 1920px)')

  return (
    <Container>
      <StyledContainer
        sx={{
          marginTop: 0,
          marginBottom: 0,
          ...(!matches && {
            margin: '0px 70px',
          }),
        }}
      >
        <Content>
          <Box>
            <Typography>
              © 2024 BTG Pactual - CNPJ 30.306.294/0002-26
              <br />
              <br />
              Av. Brigadeiro Faria Lima, 3.477. São Paulo - SP - Brasil
            </Typography>

            <CookiesButton variant="contained">
              <CookieIcon />
              Gerenciar cookies
            </CookiesButton>
          </Box>
          <LogosContainer>
            <img src={b3} alt="B3" width={45} height={50} />
            <img src={b3Retail} alt="B3 Retail Broker" width={45} height={68} />
            <img src={anbima} alt="ANBIMA" width={86} height={50} />
            <img
              src={anbimaRegulacao}
              alt="Autorregulação ANBIMA"
              width={86}
              height={50}
            />
            <img src={reclameAqui} alt="Reclame Aqui" width={86} height={50} />
          </LogosContainer>
        </Content>
      </StyledContainer>
    </Container>
  )
}
