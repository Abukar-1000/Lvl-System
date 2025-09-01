import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router";
import BluredPaper from "../Components/CustomPapers/BluredPaper";
import useGetPageRange from "../Hooks/Journal/useGetPageRange";
import JournalTitle from "../Components/Journal/JournalTitle";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import JournalPage from "../Components/Journal/JournalPage";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";


export default function Journal({ data }) {
    const { name } = useParams();
    const pageQuery = useGetPageRange(name);
    const [page, setPage] = useState(0);
    const pageRef = useRef(null);

    const changePage = (direction = "Next") => {
        var next = 0;
        if (direction == "Next") {
            next = page + 1;
            if (next > pageQuery.data.length - 1) {
                next = 0;
            }
        }
        else if (direction == "Previous") {
            next = page - 1;
            if (next < 0) {
                next = pageQuery.data.length - 1;
            }
        }
        setPage(next);
    }

    return (
        <Container
            maxWidth={"xl"}
        >
        <Box>
            <BluredPaper
                sx={{
                    padding: "1rem",
                    borderRadius: "10px",
                    backgroundColor: "#00000060",
                    width: "fit-content"
                }}
            >
                <Box
                    ref={pageRef}
                    sx={{
                        overflowX: "hidden"
                    }}
                >
                    {
                        pageQuery.isSuccess && <JournalPage data={pageQuery?.data[page]} ref={pageRef} />
                    }
                </Box>

                <Grid container>
                    <Grid size={6}>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={e => changePage("Previous")}
                        >
                            Previous
                        </Button>
                    </Grid>

                    <Grid size={6}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                alignContent: "end"
                            }}
                        >
                            <Button
                                variant="outlined"
                                color="success"
                                onClick={e => changePage("Next")}
                            >
                                Next
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </BluredPaper>
        </Box>
        </Container>
    )
}