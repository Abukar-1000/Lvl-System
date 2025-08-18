import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


export default function SkillAttribute({ heading, value, text, icon, backgroundColor, rank = undefined }) {

    return (
        <Stack
            sx={{
                padding: "1rem 1rem 0.5rem 1rem",
                backgroundColor: `${backgroundColor}40`,
                borderRadius: "10px"
            }}
            gap={1}
        >
            <Box
                display={"flex"}
                justifyContent={"start"}
                alignContent={"start"}
            >
                <Typography 
                    variant="caption" 
                    fontFamily={"Roboto"}
                    sx={{
                        color: "#ffffff99"
                    }}
                >
                    {heading}
                </Typography>
            </Box>

            <Stack
                direction={"row"}
                gap={1}
            >
                {icon}

                <Stack
                    direction={"row"}
                    gap={1}
                >
                    <Typography variant="subtitle2">{value}</Typography>
                    <Typography variant="body2">{text}</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}