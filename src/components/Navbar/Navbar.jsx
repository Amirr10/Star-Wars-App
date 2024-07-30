import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  { text: "Catalogue", link: "/catalogue" },
  { text: "Filters View", link: "/filters" },
];

const Navbar = () => {
  return (
		<AppBar position="sticky" sx={{ bgcolor: "#496cae" }}>
			<Toolbar>
				<Grid container alignItems={"baseline"}>
					<Grid item>
						<Button
							component={Link}
							to={"/"}
							sx={{ my: 2, color: "white", textTransform: "none" }}
						>
							<Typography variant="h6" pl={7} sx={{ flexGrow: 1 }}>
								Star Wars App
							</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{pages.map((page, idx) => (
								<Button
									key={idx}
									component={Link}
									to={page.link}
									sx={{ my: 2, color: "white", textTransform: "none" }}
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