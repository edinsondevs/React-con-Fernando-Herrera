import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const initialDataForm = {
	name: "edinson madrid",
	email: "edinsonmadrid@gmail.com",
	password: "123456",
};

// Validacion para el useForm del formulario
const formValidations = {
	name: [(value) => value.length >= 3, "Debe introducir un nombre valido" ],
	email: [ (value) => value.includes("@"), "Debe introducir un correo valido" ],
	password: [ (value) => value.length >= 6, "La contraseña debe tener mas de 6 caracteres" ],
};

export const RegisterPage = () => {
	const {
		formState,
		onInputChange,
		name,
		nameValid,
		email,
		emailValid,
		password,
		passwordValid,
	} = useForm(initialDataForm, formValidations);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ name, email, password });
		// dispatch()
	};

	console.log(nameValid)
	return (
		<AuthLayout title='Crear cuenta'>
			<form onSubmit={onSubmit}>
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
							name='name'
							value={name}
							required
							onChange={onInputChange}
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
							value={email}
							name='email'
							required
							onChange={onInputChange}
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
							value={password}
							name='password'
							required
							onChange={onInputChange}
						/>
					</Grid>
					<Grid
						container
						sx={{ mt: 1, mb: 2 }}>
						<Button
							variant='contained'
							type='submit'
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
