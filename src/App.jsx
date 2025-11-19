// src/App.jsx
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

// Import components - these will be created/moved to src/
import HangingBanner from './HangingBanner.jsx';
import WallBanner from './WallBanner.jsx'; // The actual banner design component
import WallBannerEditor from './WallBannerEditor.jsx'; // The host/editor page for the banner
import ThreeScene from './ThreeScene.jsx';

const Header = () => (
    <header className="flex-shrink-0 bg-gray-800 p-4 shadow-md z-20">
        <nav className="flex items-center justify-center gap-6">
            <Link to="/" className="font-bold text-white hover:text-yellow-400 transition">3D View</Link>
            <Link to="/hanging-banner" className="font-bold text-white hover:text-yellow-400 transition">Hanging Banner</Link>
            <Link to="/wall-banner-editor" className="font-bold text-white hover:text-yellow-400 transition">Wall Banner Editor</Link>
        </nav>
    </header>
);

const App = () => {
    return (
        <HashRouter>
            <div className="w-full h-full flex flex-col">
                <Header />
                <main className="flex-1 min-h-0 bg-gray-600">
                    <Routes>
                        <Route path="/" element={<ThreeScene />} />
                        <Route path="/hanging-banner" element={<HangingBanner />} />
                        <Route path="/wall-banner-editor" element={<WallBannerEditor />} />
                    </Routes>
                </main>
            </div>
        </HashRouter>
    );
};

export default App;