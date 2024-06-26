import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth }) => {
	const { displayName } = useSelector((state)=> state.auth)
	const { notes } = useSelector((state) => state.journal);
	
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
					<Typography variant='h6'>{displayName}</Typography>
				</Toolbar>
				<Divider />
				<List>
					{
						notes.map(note => (
							<SideBarItem key={note.id} {...note} />
						))
					}
				</List>
			</Drawer>
		</Box>
	);
};
