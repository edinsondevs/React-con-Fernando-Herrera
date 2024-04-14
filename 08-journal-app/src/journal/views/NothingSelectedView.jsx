import Grid from '@mui/material/Grid'
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Typography from '@mui/material/Typography'


export const NothingSelectedView = () => {
  return (
		<Grid
			container
			spacing={0}
			direction='column'
			alignItems='center'
			justifyContent='center'
			sx={{
				minHeight: "calc(100vh - 110px)",
				backgroundColor: "primary.main",
                borderRadius: 3
			}}>
			<Grid
				item
				xs={12}>
				<StarOutlineIcon sx={{ fontSize: 100, color: '#fff'}}/>
			</Grid>
            <Grid item >
              <Typography variant="h5" color='#fff' >Seleccionar una Nota</Typography>
            </Grid>
		</Grid>
  );
}
