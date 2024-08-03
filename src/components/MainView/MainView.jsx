import React, { useCallback, useState } from 'react'
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const url = 'https://swapi.dev/api/people/';

const MainView = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [filters, setFilters] = useState({});
  const { listItems, setListItems, isLoading, error } = useInfiniteScroll(url, ".container");

  const updateFilters  = useCallback((selectedFilters) => {
    setFilters(selectedFilters);
  }, []);

  const sortListByName = () => {
    const copiedListItems = [...listItems];
    const sortedList = copiedListItems.sort((a, b) =>
			String(a.name).localeCompare(String(b.name))
		);
    setListItems(sortedList);
  }

  return (
		<Grid container item xs={6}>
			<Grid container sx={{ height: "100%" }}>
				<Outlet
					context={{
						listItems,
						filteredList,
						filters,
            isLoading,
            error,
						updateFilters,
						setFilteredList,
						sortListByName,
					}}
				/>
			</Grid>
		</Grid>
	);
}

export default MainView;