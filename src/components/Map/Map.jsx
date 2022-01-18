import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { IoLocationSharp } from "react-icons/io";
import { Rating } from "@material-ui/lab";
//styles
import useStyles from "./Map.styled";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
	const classes = useStyles();
	const isMobile = useMediaQuery("(min-width:600px)");

	// const coordinates = { lat: 0, lng: 0 };
	return (
		<div>
			<div className={classes.mapContainer}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: "AIzaSyDkwHqKMu-h76mamkMC9L0IEqE6Xk8BSrk" }}
					defaultCenter={coordinates}
					center={coordinates}
					defaultZoom={14}
					margin={[50, 50, 50, 50]}
					options={""}
					onChildClick={""}
					onChange={(e) => {
						setCoordinates({ lat: e.center.lat, lng: e.center.lng });
						setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
					}}
				></GoogleMapReact>
			</div>
		</div>
	);
};

export default Map;
