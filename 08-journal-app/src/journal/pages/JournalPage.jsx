import IconButton from "@mui/material/IconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { NoteView } from "../views/NoteView";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector((state) => state.journal);
	
	const onClickNewNote = () => {
		dispatch( startNewNote() )	
	}

	return (
		<JournalLayout>
			{
				(!!active) ? 
				<NoteView /> 
				:
				<NothingSelectedView /> 
			}

			{/* Nota seleccionada */}
			{/* <NoteView /> */}

			{/* Vista de Notas */}
			{/* Boton de agregar nota */}
			<IconButton
				onClick={onClickNewNote}
				disabled={isSaving}
				size='large'
				sx={{
					color: "#fff",
					backgroundColor: "error.main",
					position: "fixed",
					right: 40,
					bottom: 50,
					":hover": { backgroundColor: "error.main", opacity: 0.9 },
				}}>
				<AddOutlinedIcon sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
