import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Create from '@mui/icons-material/Create'
import { formControlClasses, IconButton } from "@mui/material";

export default function AddItems({ handleSubmit }) {
    const [text, setText] = useState("");

    const handleButton = (evt) => {
        setText((evt.target.value));
    }

    const change = (evt) => {
        evt.preventDefault();
        if (text !== "") {
            handleSubmit(text);
            setText("");
        }
    }

    return (
        <form onSubmit={change}>
            <ListItem>
                <TextField onChange={handleButton} value={text} id="standard-basic" label="Add" variant="standard" InputProps={{
                    endAdornment: (<InputAdornment position="end">
                        <IconButton
                            aria-label={"create todo"}
                            edge="end"
                            type="submit"
                        >
                            <Create />
                        </IconButton>
                    </InputAdornment>)
                }} />
            </ListItem>
        </form>
    )
}