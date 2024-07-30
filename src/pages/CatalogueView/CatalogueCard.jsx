import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';

const CatalogueCard = ({ key, name, gender, birth_year, height }) => {
  return (
		<Card key={key} sx={{ maxWidth: 300 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
						{name[0]?.toUpperCase()}
					</Avatar>
				}
				title={name}
			/>
			<CardContent sx={{ pb: 0, pt: 0 }}>
				<Typography
					variant="subtitle1"
					color="#6c757d"
					component="div"
					align="center"
				>
					Height
				</Typography>
				<Typography variant="h6" align="center">
					{height}
				</Typography>
			</CardContent>
			<CardContent sx={{ pb: 0 }}>
				<Typography
					variant="subtitle1"
					color="#6c757d"
					component="div"
					align="center"
				>
					Age
				</Typography>
				<Typography variant="h6" align="center">
					{birth_year}
				</Typography>
			</CardContent>
			<CardContent>
				<Typography
					variant="subtitle1"
					color="#6c757d"
					component="div"
					align="center"
				>
					Gender
				</Typography>
				<Typography variant="h6" align="center">
					{gender}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CatalogueCard;