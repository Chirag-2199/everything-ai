// components/Navbar.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg" >
      {/* ... (same navbar code as before) */}
    </nav>
  );
};

export default Navbar;