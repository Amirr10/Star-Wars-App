import React, { useState, Suspense } from 'react';
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
import { useOutletContext } from 'react-router-dom';
import { styles } from './styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import SortIcon from '@mui/icons-material/Sort';
import NoAvailableData from '../../utils/NoAvailableData';
import * as Component from "./index";

const DEFAULT_VIEW = "CatalogueCard";

const CatalogueView = () => {
  const [view, setView] = useState(DEFAULT_VIEW);
  const { listItems, filteredList, sortListByName, isLoading, error } = useOutletContext();
	const displayList = filteredList?.length > 0 ? filteredList : listItems;
	const ViewComponent = view ? Component[view] : Component[DEFAULT_VIEW] ;

  const handleToggleView = (event, viewType) => {
    setView(viewType);
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
						<Tooltip title="Sort By Name" arrow placement="bottom-start">
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
							<ToggleButton value="CatalogueList" aria-label="left aligned">
								<FormatListBulletedIcon />
							</ToggleButton>
							<ToggleButton value="CatalogueCard" aria-label="centered">
								<GridViewIcon />
							</ToggleButton>
						</ToggleButtonGroup>
					</Grid>
				</Grid>
			</Grid>

			<Box sx={styles.container} className="container">
				<Grid container item rowSpacing={2} columnSpacing={2}>
					{displayList ? ( 
							<Suspense fallback={<CircularProgress />}>
								<ViewComponent displayList={displayList} />
							</Suspense>
					) : null
					}
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