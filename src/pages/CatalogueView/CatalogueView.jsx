import React, { useState } from 'react'
import {
	Box,
	Grid,
	IconButton,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	Typography,
	CircularProgress,
} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import { useOutletContext } from 'react-router-dom';
import CatalogueCard from './CatalogueCard';
import SortIcon from '@mui/icons-material/Sort';
import NoAvailableData from '../../utils/NoAvailableData';
import { styles } from './styles';

const CatalogueView = () => {
  const [view, setView] = useState('grid');
  const { listItems, filteredList, sortListByName, isLoading, error } = useOutletContext();

  const handleToggleView = () => {
    return;
  }

	if(error) return <NoAvailableData />;

  return (
		<Grid container pt={4}>
			<Grid container item alignItems="center" wrap="nowrap">
				<Grid item xs={3}>
					<Typography variant="h5">Catalogue View</Typography>
				</Grid>
				<Grid container item alignItems="center" justifyContent="flex-end">
					<Grid item>
						<Tooltip title="Sort List" arrow placement="bottom-start">
							<IconButton onClick={sortListByName}>
								<SortIcon />
							</IconButton>
						</Tooltip>
					</Grid>
					<Grid item>
						<ToggleButtonGroup
							value={view}
							exclusive
							onChange={handleToggleView}
						>
							<ToggleButton value="left" aria-label="left aligned">
								<FormatListBulletedIcon />
							</ToggleButton>
							<ToggleButton value="center" aria-label="centered">
								<GridViewIcon />
							</ToggleButton>
						</ToggleButtonGroup>
					</Grid>
				</Grid>
			</Grid>

			<Box
				className="scrollable-container"
				style={{
					width: "100%",
					height: `calc(100vh - 200px)`,
					overflow: "auto",
				}}
			>
				<Grid container item rowSpacing={2} columnSpacing={2}>
					{(filteredList?.length > 0 ? filteredList : listItems)?.map(
						(item, idx) => (
							<Grid item xs={4} key={idx}>
								<CatalogueCard {...item} />
							</Grid>
						)
					)}
					{isLoading && (
						<Box sx={styles.spinner}>
							<CircularProgress />
						</Box>
					)}
				</Grid>
			</Box>
		</Grid>
	);
}

export default CatalogueView;