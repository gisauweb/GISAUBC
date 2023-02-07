import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    button: {
        borderRadius: "24px",
        textTransform: "none",
        width: "27%",
        background: "linear-gradient(to left, #7D0202, #7D0202)",
        color: "white",
        height: "2.5rem",
        padding: "0",
        transition: "background 300ms ease-out",
        "&:hover": {
            background: "linear-gradient(to left, #7D0202, #B25F4C)",
        },
        marginTop: "0.5rem",
        "@media (min-width: 1500px)": {
            width: "22%",
        },
        "@media(max-width: 400px)": {
            width: "50%",
            height: "1.5rem",
            paddingTop: "0",
            margin: "0"
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
        <span className="font-oswald text-[10px] sm:text-sm lg:text-lg">Learn More</span>
    </Button>;
}