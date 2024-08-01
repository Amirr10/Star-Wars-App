import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const url = 'https://swapi.dev/api/people/';

const MainView = () => {
  const [listItems, setListItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get(`${url}?page=${page}`);
  
      setListItems(prevData => [...prevData, ...response?.data?.results]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }, [page, isLoading]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}?page=${page}`);
        setListItems(prevData => [...prevData, ...response?.data?.results]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
		<Grid container item xs={6}>
			<Grid container sx={{ height: "100%" }}>
				<Outlet context={{ listItems, fetchData }} />
			</Grid>
		</Grid>
	)
}

export default MainView;