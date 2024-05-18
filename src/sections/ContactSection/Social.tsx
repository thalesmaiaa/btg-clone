import TikTokIcon from '@/assets/tiktok.svg'
import SpotiftIcon from '@/assets/spotify.svg'
import FacebookIcon from '@/assets/icon-fb.svg'
import InstagramIcon from '@/assets/icon-instagram.svg'
import LinkedInIcon from '@/assets/icon-linkedin.svg'
import YouTubeIcon from '@/assets/icon-youtube.svg'
import TelegramIcon from '@/assets/telegram.svg'
import WhatsAppIcon from '@/assets/icon-whatsapp.svg'

import {
  SectionActionItem,
  SectionActions,
  SectionHeading,
  SectionItem,
} from './styles'

type SocialProps = {
  social: {
    title: string
    sections: string[]
    rowSize?: number
    size: string
    onlyIcons?: boolean
  }[]
}

const icons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
  telegram: TelegramIcon,
  tiktok: TikTokIcon,
  spotify: SpotiftIcon,
  whatsapp: WhatsAppIcon,
}

export function Social({ social }: SocialProps) {
  return (
    <>
      {social.map((item) => (
        <SectionItem item xs={4} key={item.title} size={item.size}>
          <SectionHeading>{item.title}</SectionHeading>
          <SectionActions rowSize={item.rowSize}>
            {item.sections.map((action) => {
              if (item.onlyIcons) {
                const Icon = icons[action as keyof typeof icons]
                return (
                  <SectionActionItem key={action}>
                    <img src={Icon} alt={action} />
                  </SectionActionItem>
                )
              }

              return (
                <SectionActionItem key={action}>{action}</SectionActionItem>
              )
            })}
          </SectionActions>
        </SectionItem>
      ))}
    </>
  )
}
