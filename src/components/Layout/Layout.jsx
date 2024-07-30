import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material'
import MainView from '../MainView/MainView'

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
        <MainView />
      </Box>
    </Box>
  )
}

export default Layout;