import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";

export const JournalPage = () => {
	return (
		<JournalLayout>
			<NothingSelectedView />

			{/* Nota seleccionada */}
			{/* <NoteView /> */}

			{/* Vista de Notas */}
			{/* Boton de agregar nota */}
			<IconButton
				size='large'
				sx={{
					color:"#fff",
					backgroundColor: "error.main",
					position: "fixed",
					right: 40,
					bottom: 50,
					":hover": { backgroundColor: "error.main", opacity: 0.9},
				}}>
				<AddOutlinedIcon sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
