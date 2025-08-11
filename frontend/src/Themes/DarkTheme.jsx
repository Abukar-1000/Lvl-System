import { createTheme } from '@mui/material/styles';
import { pink, purple, red, teal } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        success: {
            main: teal["A200"]
        },
        secondary: {
            main: purple["A200"]
        },
        error: {
            main: pink["A200"]
        },
        warning: {
            main: red["A200"]
        }
    }
})