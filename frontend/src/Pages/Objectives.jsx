import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useGetAllObjectives from "../Hooks/Objectives/useGetAllObjectives";
import Objective from "../Components/Objective/Objective";



export default function Objectives({  }) {

    const objectivesQuery = useGetAllObjectives();
    return (
        <Container 
            maxWidth={"xl"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                minHeight: "50dvh",
            }}    
        >
            <Stack
                gap={"1rem"}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}    
            >
                {
                    objectivesQuery?.isSuccess && (
                        objectivesQuery?.data.map(objective => (<Objective data={objective}/>))
                    )
                }
            </Stack>
        </Container>
    );
}