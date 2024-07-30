import data from "./people.json";
import Layout from './components/Layout/Layout';
import { Box } from "@mui/material";

const App = () => {
  return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<Layout />
		</Box>
	);
}

export default App