// components/ClientSidebar.js
'use client'; // Mark as Client Component

import { Drawer, List, ListItem, ListItemText, ListItemButton, Toolbar } from '@mui/material';

export const ClientSidebar = () => {
    return (
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
    );
};