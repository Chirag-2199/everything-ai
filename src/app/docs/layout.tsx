// app/docs/layout.js
import { Box, Container, Typography, CssBaseline, Toolbar } from '@mui/material';
import { ClientAppBar } from '../components/clientAppBar';
import { ClientSidebar } from '../components/clientSideBar';

import { ReactNode } from 'react';

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <ClientAppBar />
            <ClientSidebar />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar /> {/* Spacer */}
                <Container maxWidth="md">
                    {children}
                </Container>
            </Box>
        </Box>
    );
}