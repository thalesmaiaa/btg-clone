import { Container, Card } from '@/components'

import exchangeIcon from '@/assets/exchange-icon.svg'
import incomeIcon from '@/assets/fixed-income-icon.svg'
import variableIcon from '@/assets/variable-income-icon.svg'
import investmentFundIcon from '@/assets/investment-fund-icon.svg'
import pensionIcon from '@/assets/pension-icon.svg'

import data from '@/mocks/information.json'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

import { Action, Heading, StyledBox, SubHeading } from './styles'

const icons = {
  exchangeIcon,
  incomeIcon,
  variableIcon,
  investmentFundIcon,
  pensionIcon,
}

export function InformationSection() {
  return (
    <StyledBox>
      <Container>
        <Heading>Mais de 1.000 investimentos</Heading>
        <SubHeading>
          Se precisar de ajuda, aqui você tem atendimento humanizado 24h por
          dia, 7 dias por semana.
        </SubHeading>
        <Action variant="contained">Abra sua conta</Action>

        <Card.Root container gap={2}>
          {data.cards.map((card) => (
            <Card.Item item xs={2} key={card.title}>
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
