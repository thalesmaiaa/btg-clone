import {
  SectionActionItem,
  SectionActions,
  SectionHeading,
  SectionItem,
} from './styles'

type AboutProps = {
  about: {
    title: string
    sections: string[]
    type?: string
    underlined?: boolean
  }[]
}

export function About({ about }: AboutProps) {
  return (
    <>
      {about.map((item) => {
        if (item.type === 'large') {
          return (
            <SectionItem item xs={4} key={item.title} size="large">
              <SectionHeading>{item.title}</SectionHeading>
              <SectionActions>
                {item.sections.map((action) => (
                  <SectionActionItem key={action}>{action}</SectionActionItem>
                ))}
              </SectionActions>
            </SectionItem>
          )
        }

        return (
          <SectionItem item xs={4} key={item.title}>
            <SectionHeading>{item.title}</SectionHeading>
            <SectionActions>
              {item.sections.map((action) => (
                <SectionActionItem
                  key={action}
                  sx={{
                    textDecoration: item.underlined ? 'underline' : '',
                  }}
                >
                  {action}
                </SectionActionItem>
              ))}
            </SectionActions>
          </SectionItem>
        )
      })}
    </>
  )
}
