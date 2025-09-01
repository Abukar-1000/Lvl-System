import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import JournalTitle from "./JournalTitle";
import BluredPaper from "../CustomPapers/BluredPaper";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";


export default function JournalPage({ data, ref }) {
    const [pageText, setPageText] = useState("Loading...")
    // figure out why useState is failing
    useEffect(() => {
        if (pageText !== data.data) {
            setPageText(data.data);
        }

    }, [data.data]);

    return (
        <Box
            sx={{
                width: {
                    md: "80dvw",
                    lg: "60dvw",
                    xl: "50dvw"
                },
                minHeight: "90dvh"
            }}
        >
            <Box>
                <JournalTitle created={data?.created} name={data?.journalName} />
            </Box>
            <Divider sx={{ paddingTop: "1rem" }}/>

            <Slide
                in={true}
                container={ref.current}
                key={data?.created}
                direction="left"
                timeout={300}
            >
                <Box
                    sx={{ paddingTop: "1rem" }}
                    key={data?.created}
                >
                    <TextField 
                        value={pageText}
                        onChange={e => setPageText(e.target.value)}
                        multiline 
                        color="default"
                        sx={{
                            width: "100%",
                        }} 
                    />
                </Box>
            </Slide>
        </Box>
    )
}