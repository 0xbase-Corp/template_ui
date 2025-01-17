import { Box, LinearProgress } from '@mui/material'
import React from 'react'

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
      }}
    >
      <LinearProgress color="success" />
    </Box>
  )
}

export default Loader
