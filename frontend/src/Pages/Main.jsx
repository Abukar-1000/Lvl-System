import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import useGetAllSkills from "../Hooks/Skill/useGetAllSkills";
import SkillCard from "../Components/Skill/SkillCard";
import StatCard from "../Components/Skill/StatCard";



export default function Main() {
    const query = useGetAllSkills();
  
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
                <Stack
                    direction={"row"}
                    display={"flex"}
                    justifyContent={"space-around"}
                    alignContent={"space-around"}
                    gap={2}
                >
                    {
                        query.isSuccess && (
                            query.data.map(entry => (<SkillCard query={entry}/>))
                        )
                    }
                    {/* <StatCard /> */}
                </Stack>
            </Stack>
        </Container>
    )
}