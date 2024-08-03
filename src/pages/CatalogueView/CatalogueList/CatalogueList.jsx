import React from 'react'
import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { styles } from '../styles';

const CatalogueList = ({ displayList }) => {
  return displayList?.map((item, idx) => {
		const { name, gender, birth_year, height } = item;
		return (
		<Grid container sx={{ pt: "10px", pl: "20px" }} key={idx}>
			<Grid item xs={12}>
				<List>
					<ListItem
						sx={styles.catalogueList.listItem}
					>
						<ListItemAvatar>
							<Avatar sx={styles.catalogueCard.avatar}>
								{name?.[0]?.toUpperCase()}
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={name} />
						<ListItemText primary={gender} />
						<ListItemText primary={height} />
						<ListItemText primary={birth_year} />
					</ListItem>
				</List>
			</Grid>
		</Grid>
	)}
	)
}

export default CatalogueList