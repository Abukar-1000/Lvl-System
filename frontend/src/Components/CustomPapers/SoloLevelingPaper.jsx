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
import { indigo, purple } from '@mui/material/colors';
import { useState } from "react";
import { BlurCard } from "../../Themes/BlurTheme";
import NeonFlowField from "../Skill/NeonFlowField";

export default function SoloLevelingPaper({ children, sx = {} }) {
const [ isMouseOver, setIsMouseOver  ] = useState(false);

    return (
        <Paper
            onMouseEnter={e => setIsMouseOver(true)}
            onMouseLeave={e => setIsMouseOver(false)}
            elevation={ isMouseOver? 24 : 2}
            sx={{
                padding: "1rem",
                minWidth: "200px",
                borderRadius: "10px",
                overflow: "hidden",
                ...sx,
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
                        zIndex: 1,
                    }}
                >
                   {children}
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