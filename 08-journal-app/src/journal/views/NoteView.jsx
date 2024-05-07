import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import TextField from '@mui/material/TextField'
import { ImageGallery } from "../components";
import { useForm } from './../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";



export const NoteView = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
      dispatch(setActiveNote(formState));
  },[formState])

  const onSaveNote = () => {
		dispatch(startSaveNote());
  };
	return (
		<Grid
			container
			spacing={0}
			direction='row'
            alignItems='center'
			justifyContent='space-between'
			sx={{ mb: 1 }}
        >
			<Grid item>
				<Typography
					fontSize={30}
					fontWeight='light'
					color='initial'>
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<Button onClick={onSaveNote}>
					<SaveOutlinedIcon sx={{ fontSize: 30, mr: 1,  }} />
					Guardar
				</Button>
			</Grid>
            <Grid container spacing={0}>
              <TextField
                id=""
                type="text"
                label="Título"
                placeholder="Ingrese un título"
                variant="filled"
                fullWidth
                sx={{ border: 'none', mb:1}}
                value={ title}
                name="title"
                onChange={ onInputChange }
              />
              <TextField
                id=""
                type="text"
                label="Descripcion"
                placeholder="¿Que sucedio el dia de hoy?"
                variant="filled"
                fullWidth
                multiline
                sx={{ border: 'none', mb:1}}
                minRows={5}
                value={ body }
                name="body"
                onChange={ onInputChange }
              />
              {/* Galeria de Imagenes */}
              <ImageGallery />
            </Grid>
		</Grid>
	);
};
