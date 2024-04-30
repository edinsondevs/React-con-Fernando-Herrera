import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { startCreatingUserWithEmailPassword } from './../../store/auth/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useMemo } from "react";
import { Alert } from "@mui/material";

const initialDataForm = {
	displayName: "",
	email: "",
	password: "",
};

// Validacion para el useForm del formulario
const formValidations = {
	displayName: [(value) => value.length >= 3, "Debe introducir un nombre valido" ],
	email: [ (value) => value.includes("@"), "Debe introducir un correo valido" ],
	password: [ (value) => value.length >= 6, "La contraseña debe tener mas de 6 caracteres" ],
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);
	const { status, errorMessage } = useSelector(state => state.auth);
	const isCheckingAuthentication = useMemo(()=> status === 'checking',[status])
	const {
		formState,
		onInputChange,
		displayName,
		nameValid,
		email,
		emailValid,
		password,
		passwordValid,
		isFormValid,
	} = useForm(initialDataForm, formValidations);
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		setFormSubmitted(true);
		if (!isFormValid) return;
		dispatch(startCreatingUserWithEmailPassword(formState));
	};
	
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
							name='displayName'
							value={displayName}
							onChange={onInputChange}
							helperText={nameValid}
							error={nameValid && formSubmitted}
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
							label='Correo'
							value={email}
							name='email'
							helperText={emailValid}
							error={emailValid && formSubmitted}
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
							label='Contraseña'
							value={password}
							name='password'
							onChange={onInputChange}
							helperText={passwordValid}
							error={passwordValid && formSubmitted}
						/>
					</Grid>
					<Grid
						container
						sx={{ mt: 1, mb: 2 }}>
					<Grid 
						item
						xs={12}
						display={ (!!errorMessage ) ? '' : 'none'}
					>
						<Alert severity="error" >
							{errorMessage}
						</Alert>
					</Grid>
						<Button
							variant='contained'
							type='submit'
							disabled={isCheckingAuthentication}
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
