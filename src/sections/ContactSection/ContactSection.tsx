import { Container as StyledContainer } from '@/components'

import data from '@/mocks/contact.json'

import whiteLogo from '@/assets/btg-logo-white.svg'
import iconChat from '@/assets/icon-chat.svg'

import { About } from './About'
import { Contacts } from './Contacts'
import { Social } from './Social'

import { Grid, useMediaQuery } from '@mui/material'

import {
  Container,
  IconChat,
  LogoItem,
  SectionActionItem,
  SectionActions,
  SectionHeading,
  SectionItem,
} from './styles'

export function ContactSection() {
  const matches = useMediaQuery('(min-width: 1920px)')

  return (
    <Container>
      <StyledContainer
        sx={{
          marginTop: 0,
          ...(!matches && {
            margin: '0px 70px 40px',
          }),
        }}
      >
        <Grid container rowGap={8}>
          <LogoItem item xs={12}>
            <img src={whiteLogo} alt="BTG LOGO " />
          </LogoItem>

          <About about={data.about} />

          <SectionItem
            item
            xs={12}
            sx={{
              width: '100%',
              maxWidth: '100% !important',
            }}
          >
            <SectionHeading>Fale Conosco</SectionHeading>
            <SectionActions>
              <SectionActionItem
                sx={{
                  width: 270,
                }}
                variant="h6"
              >
                <IconChat src={iconChat} />
                Atendimento via telefone e chat no aplicativo, 24 horas por dia,
                7 dias por semana.
              </SectionActionItem>
            </SectionActions>
          </SectionItem>

          <Contacts contacts={data.contacts} />

          <Social social={data.social} />
        </Grid>
      </StyledContainer>
    </Container>
  )
}
