import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    InputBase,
    alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import theme from '../theme/theme';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My App
                </Typography>
                <InputBase
                    sx={{
                        marginLeft: 'auto',
                        marginRight: '10px',
                        borderRadius: '4px',
                        backgroundColor: (theme) =>
                            alpha(theme.palette.common.white, 0.15),
                        '&:hover': {
                            backgroundColor: (theme) =>
                                alpha(theme.palette.common.white, 0.25),
                        },
                        padding: '6px 12px',
                        transition: (theme) =>
                            theme.transitions.create('width'),
                        width: '200px',
                        [theme.breakpoints.up('md')]: {
                            width: '400px',
                        },
                    }}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                >
                    Add Task
                </Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};
