import { useMemo } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthenticatication, startGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {
	const dispatch = useDispatch();
	const { status } = useSelector(state => state.auth);

	const { email, password, onInputChange } = useForm({
		email: "edinson@gmail.com",
		password: "123456",
	});

	const isAuthenticated = useMemo(() => status === 'checking' , [status])
	const onSubmit = (e) => {
		const { email, password } = e
		e.preventDefault();
		console.log({ email, password });
		dispatch(checkingAuthenticatication(email, password ));
	};

	const onGoogleSignIn = () => {
		console.log("onGoogleSignIn");
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Login'>
			<form onSubmit={onSubmit}>
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
							name='email'
							value={email}
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
							placeholder='contraseña'
							fullWidth
							label='contraseña'
							value={password}
							name='password'
							onChange={onInputChange}
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
								fullWidth
								disabled={isAuthenticated}
								type='submit'>
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
								fullWidth
								disabled={isAuthenticated}
								onClick={onGoogleSignIn}>
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
