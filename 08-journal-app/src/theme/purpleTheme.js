import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#556cd6',
//         },
//         secondary: {
//             main: '#19857b',
//         },
//         error: {
//             main: red.A400,
//         },
//     },
// });

// export default theme;

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254',
        },
        secondary:{
            main: '#543884',
        },
        error: {
            main: red["A700"]
        },
    }
})