import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const url = 'https://swapi.dev/api/people/';

const MainView = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [filters, setFilters] = useState({});
  const { listItems, fetchData } = useInfiniteScroll(url);

  const updateFilters  = useCallback((selectedFilters) => {
    setFilters(selectedFilters);
  }, []);

  return (
		<Grid container item xs={6}>
			<Grid container sx={{ height: "100%" }}>
				<Outlet
					context={{
            listItems,
						filteredList,
            filters,
						fetchData,
						updateFilters,
						setFilteredList,
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default MainView;