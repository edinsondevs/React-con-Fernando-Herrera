import { CircularProgress, Grid } from "@mui/material";
import React from "react";

export const CheckingAuth = () => {
	return (
		<Grid
			container
            direction='column'
			justifyContent='center'
			alignContent='center'
			sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}>
			<Grid item >
				<CircularProgress color="warning" />
			</Grid>
		</Grid>
	);
};
