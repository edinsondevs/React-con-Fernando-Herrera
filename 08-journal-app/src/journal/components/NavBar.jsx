import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Grid from "@mui/material/Grid";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const NavBar = ({ drawerWidth }) => {
	return (
		<AppBar
			position='fixed'
			color='primary'
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}>
			<Toolbar>
				<IconButton
					color='inherit'
					edge='start'
					//onClick={}
					sx={{
						mr: 2,
						display: { sm: "none" },
					}}>
					<MenuRoundedIcon />
				</IconButton>

				<Grid
					container
					direction='row'
					alignItems='center'
					justifyContent='space-between'>
					<Typography
						noWrap
						variant='h6'
						component='div'>
						Journal App
					</Typography>
					<IconButton color='inherit'>
						<LogoutOutlinedIcon />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
