import Layout from './components/Layout/Layout';
import { Box } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
		<Router>
			<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
				<Layout />
			</Box>
		</Router>
	);
}

export default App