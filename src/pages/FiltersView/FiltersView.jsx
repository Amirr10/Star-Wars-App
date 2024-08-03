import React, { useCallback, useEffect, useState } from 'react'
import { Grid, Card, CardContent, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

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
	const isMaxLength = formData?.name?.length === MAX_CHAR_LENGTH;

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
					maxHeight: "100%",
				}}
			>
				<CardContent sx={{ height: "100%" }}>
					<Grid container wrap="nowrap" height={"100%"}>
						{/* Left Panel */}
						<Grid container item flexDirection={"column"} rowSpacing={4}>
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
									helperText={isMaxLength ? `Limit of ${MAX_CHAR_LENGTH} characters` : ""}
									error={isMaxLength}
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
						<Grid container item flexDirection={"column"} justifyContent={"flex-start"} alignContent={"space-around"}>
							<Grid item>
								<Typography variant="h6">Count:</Typography>
							</Grid>
              <Grid item>
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