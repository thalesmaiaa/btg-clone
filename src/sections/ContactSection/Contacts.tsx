import { Fragment } from 'react'

import {
  SectionActionItem,
  SectionActions,
  SectionDescription,
  SectionHeading,
  SectionItem,
} from './styles'

type ContactsProps = {
  contacts: {
    title: string
    sections: {
      phone: string
      description?: string
      underlined?: boolean
    }[]
    secondary?: {
      title: string
      sections: {
        phone: string
      }[]
    }
    multiple?: boolean
    size?: string
  }[]
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <>
      {contacts.map((contact, index) => {
        const itemSize = contact.multiple ? 2 : contact.size === 'small' ? 2 : 4

        return (
          <Fragment key={index}>
            <SectionItem
              item
              xs={itemSize}
              key={contact.title}
              size={contact.size}
              sx={{
                marginRight: contact.multiple ? '0px' : '100px',
              }}
            >
              <SectionHeading borders={false}>{contact.title}</SectionHeading>

              <SectionActions displayFlex>
                {contact.sections.map(
                  (action: {
                    phone: string
                    description?: string
                    underlined?: boolean
                  }) => (
                    <SectionActionItem
                      key={action.phone}
                      variant="h6"
                      sx={{
                        gap: '4px',
                      }}
                      decoration="underline"
                    >
                      <span
                        style={{
                          textDecoration:
                            action.underlined === false ? 'none' : 'underline',
                        }}
                      >
                        {action.phone}
                      </span>
                      <SectionDescription>
                        {action?.description && ' | '}
                        {action?.description as string}
                      </SectionDescription>
                    </SectionActionItem>
                  ),
                )}
              </SectionActions>
            </SectionItem>

            {contact.multiple && (
              <SectionItem
                item
                xs={2}
                sx={{
                  marginRight: 0,
                }}
              >
                <SectionHeading borders={false}>
                  {contact.secondary?.title}
                </SectionHeading>

                <SectionActions displayFlex>
                  {contact.secondary?.sections.map((action) => (
                    <SectionActionItem
                      key={action.phone}
                      variant="h6"
                      sx={{
                        gap: '4px',
                      }}
                      decoration="underline"
                    >
                      <span style={{ textDecoration: 'underline' }}>
                        {action.phone}
                      </span>
                    </SectionActionItem>
                  ))}
                </SectionActions>
              </SectionItem>
            )}
          </Fragment>
        )
      })}
    </>
  )
}
