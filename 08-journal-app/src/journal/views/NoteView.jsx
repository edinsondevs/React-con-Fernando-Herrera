import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import TextField from '@mui/material/TextField'
import { ImageGallery } from "../components";



export const NoteView = () => {
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
					14 Abril 2024
				</Typography>
			</Grid>
			<Grid item>
				<Button>
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
                // value={}
                // onChange={}
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
                // value={}
                // onChange={}
              />
              {/* Galeria de Imagenes */}
              <ImageGallery />
            </Grid>
		</Grid>
	);
};
