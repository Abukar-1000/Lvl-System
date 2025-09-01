import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useState } from "react";
import SoloLevelingPaper from "../CustomPapers/SoloLevelingPaper";
import Grid from "@mui/material/Grid";
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router";

/**
 * Add journal name parameter to routing
 * Add journal page
*/

export default function Journal({ data }) {

    const width = 25
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <Box>
            <Link to={`/journals/${data.name}`}>
                <SoloLevelingPaper
                    sx={{
                        width: `${width}dvw`,
                        height: "30dvh"
                    }}
                >
                    <Grid container
                        sx={{
                            width: `${width}dvw`,
                        }}
                    >
                        <Grid size={{ xs: 6 }}>
                            <Box
                                display={"flex"}
                                justifyContent={"start"}
                                alignContent={"start"}
                            >
                                <Chip 
                                    label={data.created_At}
                                    icon={<PlayCircleFilledWhiteIcon />}
                                    color="secondary"
                                />
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 6 }}>
                            <Box
                                display={"flex"}
                                justifyContent={"end"}
                                alignContent={"end"}
                            >
                                <Chip 
                                    label={data.name}
                                    icon={<BookIcon />}
                                    color="secondary"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </SoloLevelingPaper>
            </Link>
        </Box>
    );
}