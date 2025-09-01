import Grid from "@mui/material/Grid";
import BookIcon from '@mui/icons-material/Book';
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import TimelineIcon from '@mui/icons-material/Timeline';
import Box from "@mui/material/Box";

export default function JournalTitle({ name, created }) {
    const options = {
        month: "short",   // "Aug"
        day: "numeric",   // "31"
        year: "numeric",  // "2025"
        hour: "numeric",  // "10"
        minute: "2-digit",// "20"
        hour12: true      // AM/PM
    };

    const date = new Date(created).toLocaleDateString("en-US", options);
    const avatarDimensions = 42;

    return (
        <Grid container>
            <Grid size={{ xs: 4}}>
                <Chip 
                    label={name}
                    icon={<BookIcon />}
                    color="default"
                    size="medium"
                />
            </Grid>

            <Grid size={{ xs: 8}}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignContent: "end",
                        gap: 2
                    }}
                >
                    <Box
                        paddingTop={"0.3rem"}
                    >
                        <Chip 
                            label={date}
                            icon={<TimelineIcon />}
                            color="default"
                            size="medium"
                        />
                    </Box>
                    <Avatar 
                        alt="Selfie"
                        src="https://www.dropbox.com/scl/fi/nl2cca7g2cr2eg15pl332/08_30_2025.jpeg?rlkey=0utnlfzvhe4sxk61mjiqfuk1k&raw=1"
                        sx={{ width: avatarDimensions, height: avatarDimensions }}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}