import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


export const AuthLayout = ({children, title = ''}) => {
	return (
		<Grid
			container
			spacing={0}
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{
				minHeight: "100vh",
				backgroundColor: "primary.main",
				padding: 4,
			}}>
			<Grid
				item
				className='box-shadow'
				xs={3}
				// md={8}
				sx={{
					width: { sm: 450 },
					backgroundColor: "white",
					padding: 3,
					borderRadius: 2,
				}}>
				<Typography
					variant='h5'
					sx={{ mb: 1 }}>
					{title}
				</Typography>
				{children}
			</Grid>
		</Grid>
	);
};
