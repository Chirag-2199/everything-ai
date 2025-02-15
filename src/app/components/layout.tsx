// components/Layout.js
import Navbar from './navbar';

import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p>© 2023 CoolApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;