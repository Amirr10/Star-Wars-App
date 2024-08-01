import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Box } from '@mui/material'
import AppRoutes from '../AppRoutes/AppRoutes'
import { styles } from "./styles";

const Layout = () => {
  return (
		<Box sx={styles.layoutWrapper}>
			<Navbar />
			<Box sx={styles.appRoutes}>
				<AppRoutes />
			</Box>
		</Box>
	);
}

export default Layout;