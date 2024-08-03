import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Icon } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { Link } from 'react-router-dom';
import { styles } from './styles';

const pages = [
  { text: "Catalogue", link: "/catalogue" },
  { text: "Filters View", link: "/filters" },
];

const Navbar = () => {
  return (
		<AppBar position="sticky" sx={styles.navbar}>
			<Toolbar>
				<Grid container alignItems={"baseline"} pl={7}>
					<Grid item>
						<Button
							component={Link}
							to={"/"}
							sx={styles.linkButton}
						>
							<Icon>
								<StarsIcon />
							</Icon>
							<Typography variant="h6" sx={{ flexGrow: 1 }}>
								Star Wars App
							</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Box sx={styles.boxButtons}>
							{pages.map((page, idx) => (
								<Button
									key={idx}
									component={Link}
									to={page.link}
									sx={styles.linkButton}
								>
									<Typography variant="subtitle2" pl={2}>
										{page.text}
									</Typography>
								</Button>
							))}
						</Box>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;