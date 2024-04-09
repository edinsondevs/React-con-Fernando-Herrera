import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {
	ListItem,
	List,
	ListItemButton,
	ListItemIcon,
	Grid,
	ListItemText,
} from "@mui/material";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

export const SideBar = ({ drawerWidth }) => {
	return (
		<Box
			component='nav'
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 },
			}}>
			<Drawer
				variant='permanent'
				// anchor='left'
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}>
				<Toolbar>
					<Typography variant='h6'>Edinson Madrid</Typography>
				</Toolbar>
				<Divider />
				<List>
					{["Enero", "Febrero", "Marzo", "Abril", "Mayo"].map(
						(text) => (
							<ListItem
								key={text}
								disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNotOutlinedIcon />
									</ListItemIcon>
									<Grid container>
										<ListItemText
											primary={text}></ListItemText>
										<ListItemText
											secondary={
												"Lorem ipsum dolor sit amet consectetur adipisicing elit. "
											}></ListItemText>
									</Grid>
								</ListItemButton>
							</ListItem>
						)
					)}
				</List>
			</Drawer>
		</Box>
	);
};
