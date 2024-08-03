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
				<Grid container flexWrap={"nowrap"} alignItems={"flex-end"} pl={7}>

					<Grid container item sx={{ maxWidth: "180px" }}>
						<Button
							component={Link}
							to={"/"}
							sx={styles.linkButton}
						>
							<Grid item pr={1}>
								<Icon >
									<StarsIcon />
								</Icon>
							</Grid>
							<Grid item>
								<Typography variant="h6">
									Star Wars App
								</Typography>
							</Grid>
						</Button>
					</Grid>

					<Grid container item>
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
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;