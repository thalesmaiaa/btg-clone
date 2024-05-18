import { Button } from '@/components/'
import BTGLogo from '@/assets/logo.svg'

import { Backdrop } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { Popover } from './Popover'
import { Tooltip } from './Tooltip'

import { Container, InfosContainer, Logo, Navbar } from './styles'
import { useHeader } from './useHeader'

export function Header() {
  const {
    anchorEl,
    openTooltip,
    closeTooltip,
    handleClick,
    handleClose,
    handleOpenTooltip,
  } = useHeader()

  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

  function CustomButtom({ children }: { children: React.ReactNode }) {
    return (
      <Button
        sx={{
          height: '80px',
          cursor: 'pointer',
        }}
      >
        {children}
      </Button>
    )
  }

  return (
    <>
      <Container position="sticky">
        <Logo src={BTGLogo} alt="BTG LOGO" />
        <Navbar>
          <InfosContainer onMouseOver={handleClick} id={id}>
            <CustomButtom>
              Para você <KeyboardArrowDownIcon fontSize="small" />
            </CustomButtom>
            <CustomButtom>
              Para empresas <KeyboardArrowDownIcon fontSize="small" />
            </CustomButtom>
            <CustomButtom>
              O BTG Pactual <KeyboardArrowDownIcon fontSize="small" />
            </CustomButtom>
          </InfosContainer>
          <InfosContainer>
            <Button variant="contained">Abra sua conta</Button>
            <Button>Ajuda</Button>
            <Tooltip
              open={openTooltip}
              onClose={closeTooltip}
              onShow={handleOpenTooltip}
            />
          </InfosContainer>
        </Navbar>
      </Container>
      <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} />

      <Backdrop open={openTooltip} onClick={closeTooltip} />
    </>
  )
}
