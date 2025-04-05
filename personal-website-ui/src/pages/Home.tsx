import { Box, Container } from "@mui/material";
import SocialsPopper from "../components/SocialsPopper";

export default function Home() {
    const namePath: string = "./name.png"

    return (
        <Container>
            <Box
                sx={{ padding: 3 }}
                component={"img"}
                src={namePath}
             />
            <SocialsPopper />
        </Container>
    )
}