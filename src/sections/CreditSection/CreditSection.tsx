import { Card, Container } from '@/components'

import card from '@/assets/card.png'
import digitalIcon from '@/assets/digital-checking-account-icon.svg'
import creditIcon from '@/assets/credit-account-icon.svg'
import blackIcon from '@/assets/black-card-icon.svg'
import cdeIcon from '@/assets/cde-icon.svg'

import data from '@/mocks/credit.json'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import {
  Action,
  CreditCard,
  CreditContent,
  CreditDescription,
  CreditDescriptionSubTitle,
  CreditDescriptionTitle,
  StyledBox,
} from './styles'

const icons = {
  digitalIcon,
  creditIcon,
  blackIcon,
  cdeIcon,
}

export function CreditSection() {
  return (
    <StyledBox>
      <Container>
        <CreditContent container alignItems="end">
          <CreditDescription item xs={6}>
            <CreditDescriptionTitle>
              Cartão de crédito
              <br />
              totalmente personalizado
            </CreditDescriptionTitle>
            <CreditDescriptionSubTitle>
              Só no BTG Pactual você escolhe o tipo de fidelidade e os
              benefícios que mais fazem sentido para você. Um cartão do seu
              jeito, em poucos cliques.
            </CreditDescriptionSubTitle>
            <Action variant="contained">Peça seu cartão</Action>
          </CreditDescription>
          <CreditDescription
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
            }}
            item
            xs={6}
          >
            <CreditCard src={card} alt="Cartão de crédito" />
          </CreditDescription>
        </CreditContent>
        <Card.Root
          container
          sx={{
            margin: '40px 0px',
          }}
          gap={2}
        >
          {data.cards.map((card) => (
            <Card.Item
              sx={{
                border: '1px solid #cbcbcb',
                width: 330,
                minWidth: 330,
              }}
              item
              xs={2}
              key={card.title}
            >
              <Card.Icon
                src={icons[card.path as keyof typeof icons] as string}
              />
              <Card.Title variant="h4">{card.title}</Card.Title>
              <Card.Description>{card.description}</Card.Description>
              <Card.Link>
                Saiba mais
                <ArrowRightAltIcon />
              </Card.Link>
            </Card.Item>
          ))}
        </Card.Root>
      </Container>
    </StyledBox>
  )
}
