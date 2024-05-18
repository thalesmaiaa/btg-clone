import { Button } from '@/components/'

import { Tooltip as MUITooltip } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

import { AccountPopoverContainer, AccountPopoverItem } from './styles'

type TooltipProps = {
  open: boolean
  onShow: () => void
  onClose: () => void
}

export function Tooltip({ onClose, onShow, open }: TooltipProps) {
  return (
    <>
      <MUITooltip
        title={
          <>
            <AccountPopoverContainer onMouseLeave={onClose}>
              {[
                'Conta de Investimentos',
                'Conta corrente',
                'Empresas',
                'Wealth Management',
                'Coporate',
                'Estrangeiros',
              ].map((label) => (
                <AccountPopoverItem key={label}>{label}</AccountPopoverItem>
              ))}
            </AccountPopoverContainer>
          </>
        }
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 15],
                },
              },
            ],
          },
          tooltip: {
            sx: {
              width: '280px',
              borderRadius: 0,
              background: 'white',
              boxShadow: 'none',
              borderTop: '1px solid #e6e7ea !important',
              padding: '0px 27px 0px',
            },
          },
          arrow: {
            sx: {
              color: 'white',
              '&::before': {
                border: '0.5px solid #e6e7ea',
              },
            },
          },
        }}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        arrow
      >
        <Button onMouseOver={onShow}>
          <PermIdentityIcon
            fontSize="small"
            sx={{
              margin: '-2px 2px 0px 0px',
            }}
          />
          Acesso
          {open && <KeyboardArrowUpIcon fontSize="small" />}
          {!open && <KeyboardArrowDownIcon fontSize="small" />}
        </Button>
      </MUITooltip>
    </>
  )
}
