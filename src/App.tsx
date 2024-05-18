import { Header } from '@/components/'
import {
  BannerSection,
  CreditSection,
  InformationSection,
  DownloadSection,
  ContactSection,
  FooterSection,
} from '@/sections'

import { Box } from '@mui/material'

export function App() {
  return (
    <Box>
      <Header />
      <BannerSection />
      <InformationSection />
      <CreditSection />
      <DownloadSection />
      <ContactSection />
      <FooterSection />
    </Box>
  )
}
