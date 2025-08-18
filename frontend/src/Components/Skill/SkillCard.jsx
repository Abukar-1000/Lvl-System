import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AirIcon from '@mui/icons-material/Air';
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SkillAttribute from "./SkillAttribute";
import { indigo } from '@mui/material/colors';

// Add Blur to card
export default function SkillCard({ query }) {
    const avatarSize = 216;
    const progress = (query.completed_Objectives / query.total_Objectives) * 100
    return (
        <Paper
            sx={{
                padding: "1rem",
                minWidth: "200px",
                borderRadius: "10px"
            }}
            elevation={2}
        >
            <Stack
                gap={5}
            >
                <Stack
                    display={"flex"}
                    direction={"row"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    gap={24}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignContent={"start"}
                    >
                        <Chip 
                            label="In Progress"
                            icon={
                                <AirIcon 
                                    color="success"
                                />
                            }
                            variant="contained"
                            color="success"
                        />
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignContent={"start"}
                    >
                        <Chip 
                            label={query.category}
                            color="secondary"
                            variant="contained"
                            size="medium"
                        />
                    </Box>    
                </Stack>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignContent={"center"}
                >
                    <Stack>
                        <Avatar 
                            src="gifs/wings-in-reveal.gif"
                            sx={{
                                width: avatarSize,
                                height: avatarSize
                            }}
                        />
                    </Stack>
                </Box>

                {/* Streak */}
                <Box>
                    <Stack
                        display={"flex"}
                        justifyContent={"space-around"}
                        alignContent={"space-around"}
                        direction={"row"}
                    >
                        <SkillAttribute 
                            heading={"Daily Streak"}
                            backgroundColor={indigo["900"]}
                            icon={
                                <LocalFireDepartmentIcon 
                                    sx={{
                                        fill: indigo["A200"]
                                    }}
                                />
                            }
                            value={query.longest_Streak}
                            text={"days streak"}
                        />

                        {/* Change to total hours worked on */}
                        <SkillAttribute 
                            heading={"Experiance"}
                            backgroundColor={indigo["900"]}
                            icon={
                                <LocalFireDepartmentIcon 
                                    sx={{
                                        fill: indigo["A200"]
                                    }}
                                />
                            }
                            value={query.longest_Streak}
                            text={"total hours"}
                        />

                    </Stack>
                </Box>


                {/* Level */}
                <Box>
                    <Stack
                        display={"flex"}
                        justifyContent={"space-around"}
                        alignContent={"space-around"}
                        direction={"row"}
                    >
                        <Chip
                            label={`Level ${query.level}`}
                            variant="outlined"
                            size="medium"
                            icon={
                                <DonutSmallIcon 
                                    sx={{
                                        fill: indigo["A200"]
                                    }}
                                />
                            }
                            sx={{
                                border: "none",
                                color: indigo["100"]
                            }}
                        />

                        <Box
                            width={"70%"}
                            justifyContent={"center"}
                            alignContent={"center"}
                        >
                            <LinearProgress 
                                variant="determinate" 
                                value={progress}
                                sx={{
                                    backgroundColor: `${indigo["A700"]}30`,
                                    "& .MuiLinearProgress-bar": {
                                        backgroundColor: indigo["A200"]
                                    },
                                }}
                            />
                        </Box>

                    </Stack>
                </Box>

            </Stack>

        </Paper>
    )
}
