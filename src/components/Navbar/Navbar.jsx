import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#496cae" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Star Wars App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;