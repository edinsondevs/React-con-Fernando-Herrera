import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import TextField from "@mui/material/TextField";
import { ImageGallery } from "../components";
import { useForm } from "./../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const NoteView = () => {
	const dispatch = useDispatch();

	const { active: note, messageSaved } = useSelector(
		(state) => state.journal
	);

	const { body, title, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);
		return newDate.toUTCString();
	}, [date]);

    //! Hace la referencia al boton de subir archivo para llamar al input file simulando el click 
	const clickRefFile = useRef(()=>{
        console.log('clickRefFile')
    });

    const onFileInputChange = ({target}) => {
		console.log('subiendo archivos');
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files));

	};

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire({
				title: "Guardado correctamente",
				text: body,
				icon: "success",
				confirmButtonText: "Aceptar",
			});
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onDeleteNote = () => {
		dispatch(startDeletingNote());
	};
	return (
		<Grid
			container
			spacing={0}
			direction='row'
			alignItems='center'
			justifyContent='space-between'
			sx={{ mb: 1 }}>
			<Grid item>
				<Typography
					fontSize={30}
					fontWeight='light'
					color='initial'>
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<input
					type='file'
					multiple
					ref={clickRefFile}
                    onChange={ onFileInputChange }
					style={{ display: "none" }}
				/>
				<IconButton
					color='primary'
					size='medium'
					onClick={() => clickRefFile.current.click()}
                >
					<UploadOutlinedIcon />
				</IconButton>
				<Button onClick={onSaveNote}>
					<SaveOutlinedIcon sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid
				container
				spacing={0}>
				<TextField
					id=''
					type='text'
					label='Título'
					placeholder='Ingrese un título'
					variant='filled'
					fullWidth
					sx={{ border: "none", mb: 1 }}
					value={title}
					name='title'
					onChange={onInputChange}
				/>
				<TextField
					id=''
					type='text'
					label='Descripcion'
					placeholder='¿Que sucedio el dia de hoy?'
					variant='filled'
					fullWidth
					multiline
					sx={{ border: "none", mb: 1 }}
					minRows={5}
					value={body}
					name='body'
					onChange={onInputChange}
				/>
				<Grid container justifyContent='end'>
					<Button color='error' sx={{mt:2}} onClick={onDeleteNote} >
					  <DeleteOutlinedIcon  />
					  Borrar Nota
					</Button>
				  
				</Grid>
				{/* Galeria de Imagenes */}
				<ImageGallery images={note.imageUrls} />
			</Grid>
		</Grid>
	);
};
