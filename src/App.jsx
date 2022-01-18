import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";

function App() {
	const [places, setPlaces] = useState([]);
	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState(null);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
			setCoordinates({ lat: latitude, lng: longitude });
			console.log({ lat: latitude, lng: longitude });
		});
	}, []);

	useEffect(() => {
		console.log(coordinates, bounds);
		getPlacesData().then((data) => {
			setPlaces(data);
		});
	}, [coordinates, bounds]);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: "100%" }}>
				<Grid item xs={12} md={4}>
					<List />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map setCoordinates={setCoordinates} coordinates={coordinates} setBounds={setBounds} />
				</Grid>
			</Grid>

			{/* <PlaceDetails /> */}
		</>
	);
}

export default App;
