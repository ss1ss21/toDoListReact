import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Button } from "@mui/material";
import { SelfImprovementSharp } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoListItems({ todo, todoRemove, taggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    return (
            <ListItem
                secondaryAction={
                    <IconButton edge="end" onClick={todoRemove} aria-label="comments">
                        <DeleteIcon />
                    </IconButton>
                }
                disablePadding
            >
                <ListItemButton role={undefined} dense>

                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.complated}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            onChange={taggle}
                        />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={todo.text} />
                </ListItemButton>
            </ListItem>
    )
}