import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Button, Link, List, ListItem, Paper, Popper, Stack } from "@mui/material";
import { useState } from "react";

export default function SocialsPopper() {
    const [popOpen, setPopOpen] = useState<boolean>(false);
    const popperId: string = "popper";
    const buttonId: string = "popper-button";
    const githubUrl: string = "https://github.com/GennaroGreg";
    const linkedInUrl: string = "https://www.linkedin.com/in/gennarogreg/";

    function handleClick() {
        if (popOpen) setPopOpen(false);
        else setPopOpen(true);
    }

    return (
        <Box>
            <Button id={buttonId} aria-describedby={popperId} variant={"contained"} type={"button"} onClick={handleClick}>
                Links
            </Button>
            <Popper id={popperId} open={popOpen} anchorEl={document.getElementById(buttonId)}>
                <Paper sx={{ background: '#888', marginTop: 1 }}>
                    <List>
                        <ListItem key={"github"}>
                            <Stack direction={"row"} spacing={2}>
                                <GitHub sx={{ color: "white" }}/>
                                <Link underline="none" href={githubUrl} color={"#FFFFFF"} target={"_blank"}>
                                    GitHub
                                </Link>
                            </Stack>
                        </ListItem>
                        <ListItem key={"linkedin"}>
                            <Stack direction={"row"} spacing={2}>
                                <LinkedIn sx={{ color: "white" }}/>
                                <Link underline="none" href={linkedInUrl} color={"#FFFFFF"} target={"_blank"}>
                                    LinkedIn
                                </Link>
                            </Stack>
                        </ListItem>
                    </List>
                </Paper>
            </Popper>
        </Box>
    )
}