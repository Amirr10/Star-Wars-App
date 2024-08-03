import React from 'react';
import { Avatar, Box, Card, CardHeader, Grid, Typography } from '@mui/material';
import { styles } from '../styles';

const CatalogueCard = ({ displayList }) => {
	return displayList?.map((item, idx) => {
		const { name, gender, birth_year, height } = item;
		return (
			<Grid item xs={4} key={idx}>
				<Card key={idx}>
					<CardHeader
						avatar={
							<Avatar sx={styles.catalogueCard.avatar}>
								{name?.[0]?.toUpperCase()}
							</Avatar>
						}
						title={name}
					/>
					<Grid container rowGap={2}>
						<Grid
							container
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Grid item>
								<Typography sx={styles.catalogueCard.leftSide}>
									Height:
								</Typography>
							</Grid>
							<Grid item>
								<Typography sx={styles.catalogueCard.rightSide}>
									{height}
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Grid item>
								<Typography sx={styles.catalogueCard.leftSide}>Age:</Typography>
							</Grid>
							<Grid item>
								<Typography sx={styles.catalogueCard.rightSide}>
									{birth_year}
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							justifyContent={"space-between"}
							alignItems={"center"}
						>
							<Grid item>
								<Typography sx={styles.catalogueCard.leftSide}>
									Gender:
								</Typography>
							</Grid>
							<Grid item>
								<Typography sx={styles.catalogueCard.rightSide}>
									{gender}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		);
	});
}

export default CatalogueCard;