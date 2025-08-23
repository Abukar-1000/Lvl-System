import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AirIcon from '@mui/icons-material/Air';
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SkillAttribute from "./SkillAttribute";
import { indigo, purple } from '@mui/material/colors';
import { useState } from "react";
import { BlurCard } from "../../Themes/BlurTheme";
import NeonFlowField from "./NeonFlowField";

// Add Blur to card
export default function SkillCard({ query }) {
    const avatarSize = 216;
    const progress = (query.completed_Objectives / query.total_Objectives) * 100
    const [ isMouseOver, setIsMouseOver  ] = useState(false);

    return (
        <Paper
            onMouseEnter={e => setIsMouseOver(true)}
            onMouseLeave={e => setIsMouseOver(false)}
            elevation={ isMouseOver? 24 : 2}
            onClick={e => alert(`Sending request for ${query.name}`)}
            sx={{
                padding: "1rem",
                minWidth: "200px",
                borderRadius: "10px",
                width: "28dvw",
                height: "36dvh",
                overflow: "hidden",
                ...BlurCard
            }}
        >
            <Box
                sx={{
                    position: "relative",
                }}
            >

                <SOLO_LEVELING_BACKGROUND 
                    color={purple["A400"]}
                    accent={purple["200"]}
                    density={1.6}
                    fade={0.01}
                    blur={10}
                    speed={1.65}
                    sx={{
                        position: "absolute",
                        zIndex: -1,
                        top: -20,
                        left: -30,
                        opacity: "20%"
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        zIndex: 2,
                    }}
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
                                    icon={
                                        <SpaceDashboardIcon 
                                            color="secondary"
                                        />
                                    }
                                    color="secondary"
                                    variant="contained"
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
                                        // color: indigo["100"]
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
                </Box>
            </Box>

        </Paper>
    )
}


function SOLO_LEVELING_BACKGROUND({ 
    sx,
    color,
    accent,
    density,
    lineWidth,
    blur,
    fade,
    speed,
    scale
}) {

    return (
        <Box
            sx={{
                ...sx
            }}
        >
            <NeonFlowField 
                color = {color}
                accent = {accent}
                density = {density}
                lineWidth = {lineWidth}
                blur = {blur}
                fade = {fade}
                speed = {speed}
                scale = {scale}
            />
        </Box>
    );
}