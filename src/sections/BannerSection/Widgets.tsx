import { Container } from '@/components'

import img01 from '@/assets/news-01.png'
import img02 from '@/assets/news-02.png'
import img03 from '@/assets/news-03.png'
import img04 from '@/assets/news-04.png'

import { Widget, WidgetImage, WidgetText, WidgetsContent } from './styles'

export function Widgets() {
  return (
    <Container>
      <WidgetsContent>
        <Widget>
          <WidgetImage src={img01} />
          <WidgetText>
            Conheça as melhores soluções para sua empresa!
          </WidgetText>
        </Widget>

        <Widget>
          <WidgetImage src={img02} />
          <WidgetText>
            Contas Internacionais, globalize o seu patrimônio
          </WidgetText>
        </Widget>

        <Widget>
          <WidgetImage src={img03} />
          <WidgetText>
            Conheça a Conta de Domiciliado no Exterior (CDE)
          </WidgetText>
        </Widget>

        <Widget>
          <WidgetImage src={img04} />
          <WidgetText>Comparador de investimentos BTG Pactual</WidgetText>
        </Widget>
      </WidgetsContent>
    </Container>
  )
}
