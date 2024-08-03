import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Card, CardContent, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { styles } from './styles';

const NO_FILTER_COUNT = 0;
const MAX_CHAR_LENGTH = 25;
const genderOptions = ['Male', 'Female', 'N/A'];

const FiltersView = () => {
  const { updateFilters , listItems, setFilteredList } = useOutletContext();
  const localStorage = useLocalStorage();
	const [count, setCount] = useState(0);
	const [formData, setFormData] = useState(localStorage.getItem("filters") || {
		name: "",
		age: "",
		gender: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
    const newFilters = { ...formData, [name]: value };
		setFormData(newFilters);
	};

  const applyFilters = useCallback((filters) => {
		const hasEmptyFilters = Object.values(filters).every(value => value === "");
    const updatedListItems = listItems?.filter(item => {
      return (
        (!filters.name || item?.name?.toLowerCase().includes(filters?.name.toLowerCase())) &&
        (!filters.age || item?.birth_year?.includes(filters?.age)) &&
        (!filters.gender || item?.gender?.toLowerCase() === filters?.gender.toLowerCase())
      );
    })
		
    setCount(!hasEmptyFilters ? updatedListItems?.length : NO_FILTER_COUNT);
    setFilteredList(updatedListItems);
  }, [listItems]);

  useEffect(() => {
    localStorage.setItem("filters", formData);
    applyFilters(formData);
    updateFilters(formData);
  }, [formData, updateFilters, applyFilters]);

	return (
		<Grid container flexDirection={"column"} justifyContent={"space-around"}>
			<Card
				sx={{
					height: "400px",
					maxHeight: "100%",
				}}
			>
				<CardContent sx={styles.filterView.cardContent}>
					<Grid container wrap="nowrap" height={"100%"}>
						{/* Left Panel */}
						<Grid container item flexDirection={"column"} rowSpacing={4} p={3}>
							<Grid item>
								<Typography variant="h6">Search Star Wars Figures</Typography>
							</Grid>

							<Grid item>
								<TextField
									label="Name"
									name="name"
									type="search"
									variant="outlined"
									value={formData?.name}
									onChange={handleInputChange}
									inputProps={{ maxLength: MAX_CHAR_LENGTH }}
									helperText={
										formData?.name?.length === MAX_CHAR_LENGTH
											? `Limit of ${MAX_CHAR_LENGTH} characters`
											: ""
									}
									error={formData?.name?.length === MAX_CHAR_LENGTH}
									fullWidth
								/>
							</Grid>

							<Grid item>
								<TextField
									label="Age"
									name="age"
									type="search"
									variant="outlined"
									value={formData?.age}
									onChange={handleInputChange}
									inputProps={{ maxLength: MAX_CHAR_LENGTH }}
									helperText={
										formData?.age?.length === MAX_CHAR_LENGTH
											? `Limit of ${MAX_CHAR_LENGTH} characters`
											: ""
									}
									error={formData?.age?.length === MAX_CHAR_LENGTH}
									fullWidth
								/>
							</Grid>

							<Grid item>
								<FormControl fullWidth>
									<InputLabel>Gender</InputLabel>
									<Select
										name="gender"
										value={formData?.gender}
										label="Gender"
										onChange={handleInputChange}
									>
										<MenuItem value="">
											None
										</MenuItem>
										{genderOptions.map((gender) => (
											<MenuItem key={gender} value={gender}>
												{gender}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>
						</Grid>

						{/* Right Panel */}
						<Grid
							sx={styles.filterView.rightSide}
							container
							item
							flexDirection={"column"}
							alignItems={"center"}
							justifyContent={"flex-start"}
							alignContent={"space-around"}
						>
							<Grid item>
								<Typography variant="h6">
									Total Star Wars figures found:
								</Typography>
							</Grid>
							<Grid item pt={9}>
								<Typography variant="h3">{count}</Typography>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
}

export default FiltersView;