import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {
	
	const { status } = useCheckAuth();

	if( status === 'checking'){
		return <CheckingAuth />
	}

	return (
		<Routes>
			{/* Login y Registro */}
			{
				status === 'authenticated' 
				? <Route path="/*" element={<JournalRoutes />} />
				: <Route path="/auth/*" element={ <AuthRoutes />} />
			
			}
			{/* CON EL TERNARIO DE STATUS ESTOY DANDOLE SEGURIDAD A LAS RUTAS  */}
			<Route path="/*" element={ <Navigate to='/auth/login' /> } />

		</Routes>
	);
};
