import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
	return (
		<AuthLayout title='Crear cuenta'>
			<form action=''>
				<Grid container>
					<Grid
						item
						xs={12}
						md={12}
						sx={{ mt: 2 }}>
						<TextField
							type='text'
							placeholder='Nombre completo'
							fullWidth
							label='Nombre completo'
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
							placeholder='Contraseña'
							fullWidth
							label='contraseña'
							// value={}
							// onChange={}
						/>
					</Grid>
					<Grid
						container
						sx={{ mt: 1, mb: 2 }}>
						<Button
							variant='contained'
							fullWidth>
							Crear Cuenta
						</Button>
					</Grid>
				</Grid>

				<Grid
					container
					direction='row'
					justifyContent='end'>
					<Typography
						variant='subtitle2'
						sx={{ mr: 1 }}>
						¿Ya tienes cuenta?
					</Typography>
					<Link
						color='inherit'
						component={RouterLink}
						to='/auth/login'>
						Ingresar
					</Link>
				</Grid>
			</form>
		</AuthLayout>
	);
};
