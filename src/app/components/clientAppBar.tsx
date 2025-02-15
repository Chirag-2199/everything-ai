// components/ClientAppBar.js
'use client'; // Mark as Client Component

import { AppBar, Toolbar, Typography, TextField, Box, Link } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export const ClientAppBar = () => {
    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 4 }}>
                    Your Library Name
                </Typography>

                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    InputProps={{
                        startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />
                    }}
                    sx={{
                        width: 300,
                        backgroundColor: 'background.paper',
                        borderRadius: 1
                    }}
                />

                <Box sx={{ flexGrow: 1 }} />
                <nav>
                    <Link href="/getting-started" color="inherit" sx={{ mx: 2 }}>Getting Started</Link>
                    <Link href="/components" color="inherit" sx={{ mx: 2 }}>Components</Link>
                    <Link href="/support" color="inherit" sx={{ mx: 2 }}>Support</Link>
                </nav>
            </Toolbar>
        </AppBar>
    );
};