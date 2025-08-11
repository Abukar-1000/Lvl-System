import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AirIcon from '@mui/icons-material/Air';

// Add Blur to card
export default function SkillCard({ query }) {
    const avatarSize = 216;
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
                            variant="outlined"
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
                            variant="outlined"
                            size="small"
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

                </Box>

                {/* Level */}
            </Stack>

        </Paper>
    )
}
