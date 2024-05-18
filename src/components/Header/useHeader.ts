import { useState } from 'react'

export const useHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [openTooltip, setOpenTooltip] = useState(false)

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function closeTooltip() {
    setOpenTooltip(false)
  }

  function handleOpenTooltip() {
    setOpenTooltip(true)
  }

  return {
    anchorEl,
    openTooltip,
    handleClick,
    handleClose,
    closeTooltip,
    handleOpenTooltip,
  }
}
