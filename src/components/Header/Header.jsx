import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import { FaSearchLocation } from "react-icons/fa";

//styles
import useStyles from "./Header.styled";

const Header = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar position="static">
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5" className={classes.title}>
						Trip Advisor
					</Typography>
					<Box display="flex">
						<Typography variant="h6" className={classes.title}>
							Explore new places
						</Typography>
						{/* <Autocomplete> */}
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<FaSearchLocation />
							</div>
							<InputBase
								placeholder="Search..."
								classes={{ root: classes.inputRoot, input: classes.inputInput }}
							/>
						</div>
						{/* </Autocomplete> */}
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
