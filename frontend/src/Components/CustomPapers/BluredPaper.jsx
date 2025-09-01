import Paper from "@mui/material/Paper";
import { BlurCard } from "../../Themes/BlurTheme";



export default function BluredPaper({ sx, children }) {

    return (
        <Paper
            sx={{
                ...BlurCard,
                ...sx
            }}
        >
            {children}
        </Paper>
    )
}