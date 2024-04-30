import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box
			sx={{ display: "flex" }}
			className='animate__animated animate__fadeIn animate__faster'>
			{/* Navbar drawerWidth */}
			<NavBar drawerWidth={drawerWidth} />
			{/* Sidebar o Drawer drawerWidth */}
			<SideBar drawerWidth={drawerWidth} />
			<Box
				component='main'
				sx={{ flexGrow: 1, p: 2 }}>
				{/* toolbar */}
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
