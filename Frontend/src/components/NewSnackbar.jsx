import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function NewSnackbar(props) {
  const { open, setOpen, message, severity } = props
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center"}}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{width: "100%"}}>
        {message}
      </Alert>

    </Snackbar>
  )
}
