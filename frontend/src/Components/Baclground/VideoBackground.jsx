import Box from "@mui/material/Box";




export default function VideoBackground({ src, children }) {

    return (
        <Box
            sx={{
                position: "relative",
                paddingTop: "2rem",
                width: "100dvw",
                height: "100dvh",
                "::-webkit-scrollbar": {
                   display: "none"
                }
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    width: "100dvw",
                    height: "100dvh",
                    zIndex: 1
                }}
            >
                {children}
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    width: "100dvw",
                    height: "95dvh",
                    zIndex: -10
                }}
            >
                <video
                    key={src + "vsh"}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px"
                    }}
                    src={src}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                />
            </Box>
        </Box>
    );
}