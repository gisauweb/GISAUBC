import { Box, Button, Grow } from "@mui/material";
import React, { useState } from "react";
import SponsorContainer from "./SponsorContainer";
import { PARTNERS } from "shared/data/partners";

const SponsorList = () => {
    const [checked, setChecked] = useState(false);

    const buttonSx = {
        margin: "2% 0 1%",
        color: "#AF4328",
        '&:hover': {
            backgroundColor: '#AF4328',
            color: '#fff',
        },
        fontFamily: "quicksand",
        fontWeight: "bold"
    }

    const growSponsorList = (sponsors) => (
        <div>
            {sponsors.map((sponsor, index) => (
                <SponsorContainer name={sponsor.name} logo={sponsor.logo} reversed={index % 2 === 0} key={sponsor.name}  />
            ))}
        </div>
    )

    const handleChange = () => {
        setChecked(!checked);
    };


    return (
        <Box className="flex flex-col items-center sm:mt-6">
            {PARTNERS.slice(0, 3).map((sponsor, index) => (
                <SponsorContainer name={sponsor.name} logo={sponsor.logo} reversed={index % 2 !== 0} key={sponsor.name} />
            ))}
            {checked ?
                <>
                    <Grow in={checked}
                        style={{ transformOrigin: '0 0 0', width: "100%" }}
                        {...(checked ? { timeout: 1500 } : {})}
                    >
                        {growSponsorList(PARTNERS.slice(3, 5))}
                    </Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                        in={checked}
                        style={{ transformOrigin: '0 0 0', width: "100%" }}
                        {...(checked ? { timeout: 3000 } : {})}
                    >
                        {growSponsorList(PARTNERS.slice(5))}
                    </Grow>
                    <Button variant="text" onClick={handleChange} sx={buttonSx}>SHOW LESS</Button>
                </> :
                <Button variant="text" onClick={handleChange} sx={buttonSx}>SHOW MORE</Button>}
        </Box>
    )
}

export default SponsorList