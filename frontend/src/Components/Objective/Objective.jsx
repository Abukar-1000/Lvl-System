import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SoloLevelingPaper from "../CustomPapers/SoloLevelingPaper";
import Box from "@mui/material/Box";
import { Grid } from "@mui/system";
import Chip from "@mui/material/Chip";
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import BoltIcon from '@mui/icons-material/Bolt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimelineIcon from '@mui/icons-material/Timeline';


export default function Objective({ data }) {

    const completion = `${data?.completed} / ${data?.total}`;
    const time = new Date(data?.end).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }) 
    return (
        <SoloLevelingPaper
            sx={{
                height: "1.5rem",
                width: "60dvw"
            }}
        >
            <Grid 
                container
                sx={{
                    width: "60dvw"
                }} 
            >
                <Grid 
                    size={{ xl: 5 }}
                >
                    <Chip 
                        label={data?.name}
                        icon={<ModeStandbyIcon />}
                        color="secondary"
                    />
                </Grid>

                {
                    (data?.daily)? 
                        (<Grid 
                            size={{ xl: 2 }}
                        >
                            <Chip 
                                label={"Daily"}
                                icon={<AllInclusiveIcon />}
                                color="secondary"
                            />
                        </Grid>)
                    :
                        (<Grid 
                            size={{ xl: 2 }}
                        >
                            <Chip 
                                label={"Limited"}
                                icon={<BoltIcon />}
                                color="secondary"
                            />
                        </Grid>)
                }

                <Grid 
                    size={{ xl: 3 }}
                >
                    <Chip 
                        label={time}
                        icon={<AccessTimeIcon />}
                        color="secondary"
                    />
                </Grid>

                <Grid 
                    size={{ xl: 2 }}
                >
                    <Chip 
                        label={completion}
                        icon={<TimelineIcon />}
                        color="secondary"
                    />
                </Grid>
            </Grid>
        </SoloLevelingPaper>
    )
}