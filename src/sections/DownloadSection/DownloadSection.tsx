import appDigital from '@/assets/app-digital.png'
import appInvestment from '@/assets/app-investment.png'

import {
  AppleButton,
  BankingItem,
  Container,
  GoogleButton,
  InvestmentItem,
  ItemContent,
  ItemContentActions,
  ItemContentSubTitle,
  ItemContentTitle,
  StyledAvatar,
} from './styles'

export function DownloadSection() {
  const APKUrl =
    'https://play.google.com/store/apps/details?id=com.btg.pactual.banking&pli=1'
  const IOSUrl = 'https://app.appsflyer.com/id1467956990'

  return (
    <Container container>
      <BankingItem item xs={6}>
        <StyledAvatar src={appDigital} />
        <ItemContent>
          <ItemContentTitle>BTG Banking</ItemContentTitle>
          <ItemContentSubTitle>
            Baixe o app de
            <br />
            conta e cartão
          </ItemContentSubTitle>
          <ItemContentActions>
            <AppleButton url={IOSUrl} title="Baixar na" />
            <GoogleButton url={APKUrl} title="DISPONÍVEL NO" />
          </ItemContentActions>
        </ItemContent>
      </BankingItem>
      <InvestmentItem item xs={6}>
        <StyledAvatar src={appInvestment} />
        <ItemContent>
          <ItemContentTitle>BTG Investimentos</ItemContentTitle>
          <ItemContentSubTitle>
            Baixe o app de
            <br />
            para investir
          </ItemContentSubTitle>
          <ItemContentActions>
            <AppleButton url={IOSUrl} title="Baixar na" />
            <GoogleButton url={APKUrl} title="DISPONÍVEL NO" />
          </ItemContentActions>
        </ItemContent>
      </InvestmentItem>
    </Container>
  )
}
