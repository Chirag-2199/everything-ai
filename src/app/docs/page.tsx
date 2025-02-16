'use client';
import {
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    TextField,
    Typography,
    Box,
    CssBaseline,
    Link,
    ListItemButton
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Docs = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* App Bar */}
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" sx={{ mr: 4 }}>
                        Docs
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

            {/* Sidebar */}
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <Toolbar /> {/* Spacer */}
                <List>
                    {['Introduction', 'Advantages', 'Comparison', 'Getting Started'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar /> {/* Spacer */}

                <Container maxWidth="md">
                    <Typography variant="h4" gutterBottom>
                        Introduction
                    </Typography>

                    <Typography paragraph>
                        Your library description goes here. Explain your project's purpose
                        and key features.
                    </Typography>

                    <Typography variant="h5" gutterBottom>
                        Key Features
                    </Typography>

                    <List>
                        {['Feature 1', 'Feature 2', 'Feature 3'].map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemText primary={`• ${item}`} />
                            </ListItem>
                        ))}
                    </List>

                    {/* Add more sections as needed */}
                </Container>
            </Box>
        </Box>
    );
};

export default Docs;