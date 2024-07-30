import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material'
import AppRoutes from '../AppRoutes/AppRoutes'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", height: '100vh', backgroundColor: "#f9f9fa" }}>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  )
}

export default Layout;