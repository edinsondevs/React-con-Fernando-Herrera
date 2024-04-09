import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
	return (
		<AuthLayout title='Login'>
			<form action=''>
				<Grid container>
					<Grid
						item
						xs={12}
						md={12}
						sx={{ mt: 2 }}>
						<TextField
							type='email'
							placeholder='correo@gmail.com'
							fullWidth
							label='correo'
							// value={}
							// onChange={}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						md={12}
						sx={{ mt: 2 }}>
						<TextField
							type='password'
							placeholder='contraseña'
							fullWidth
							label='contraseña'
							// value={}
							// onChange={}
						/>
					</Grid>
					<Grid
						container
						spacing={2}
						sx={{ mt: 1, mb: 2 }}>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}>
							<Button
								variant='contained'
								fullWidth>
								Login
							</Button>
						</Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}>
							<Button
								startIcon={<GoogleIcon />}
								variant='contained'
								fullWidth>
								<Typography variant='body1'>Google</Typography>
							</Button>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					container
					direction='row'
					justifyContent='end'>
					{" "}
					<Link
						color='inherit'
						component={RouterLink}
						to='/auth/register'>
						Crear una cuenta
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
