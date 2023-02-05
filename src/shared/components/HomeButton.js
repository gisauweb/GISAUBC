import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    button: {
        borderRadius: "24px",
        textTransform: "none",
        width: "22%",
        background: "linear-gradient(to left, #7D0202, #7D0202)",
        color: "white",
        height: "2.8rem",
        paddingTop: "0.3rem",
        transition: "background 300ms ease-out",
        "&:hover": {
            background: "linear-gradient(to left, #7D0202, #B25F4C)",
        },
        marginTop: "0.5rem",
        "@media (min-width: 1500px)": {
            height: "3rem"
        }
    }
});


export default function HomeButton({ handleClickButton }) {
    const classes = useStyles();
    return <Button
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleClickButton}
    >
        <span className="font-oswald text-lg">Learn More</span>
    </Button>;
}