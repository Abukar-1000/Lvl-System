import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useGetAllJournals from "../Hooks/Journal/useGetAllJournals";
import Journal from "../Components/Journal/Journal";


export default function Journals() {
    const journals = useGetAllJournals();

    return (
        <Container 
            maxWidth={"xl"}
        > 
            <Stack
                display={"flex"}
                justifyContent={"center"}
                alignContent={"center"}
                gap={2}
            >
                {
                    journals.data?.map(j => (<Journal data={j}/>))
                }
            </Stack>
        </Container>
    )
}