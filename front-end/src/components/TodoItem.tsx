import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoItem() {

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-activedescendant="comments">
                    <DeleteIcon />
                </ IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableFocusRipple />
                </ListItemIcon>
                <ListItemText primary={`Line Item`} />
            </ListItemButton>
        </ListItem>
    )
};






