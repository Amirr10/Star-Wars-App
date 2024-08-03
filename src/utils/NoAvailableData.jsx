import { Box, Typography } from '@mui/material'
import React from 'react'

const NoAvailableData = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5">Something went wrong, Try again</Typography>
    </Box>
  );
}

export default NoAvailableData;