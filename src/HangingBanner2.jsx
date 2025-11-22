// src/HangingBanner2.jsx
import React from 'react';

const HangingBanner2 = () => {
    const BASE_URL = import.meta.env.BASE_URL;
    const bannerStyle = {
        width: '6000px',
        height: '300px',
        background: 'linear-gradient(90deg, #1a2b52 0%, #2d4a7c 15%, #0d1b3d 30%, #0d1b3d 70%, #2d4a7c 85%, #1a2b52 100%)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
    };

    const logoStyle = {
        height: '240px',
        width: '240px',
        backgroundColor: 'white',
        borderRadius: '50%',
        border: '4px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <div style={bannerStyle}>
                {/* Flowing water pattern overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.08,
                    background: `
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 100px,
                            rgba(255, 255, 255, 0.3) 100px,
                            rgba(255, 255, 255, 0.3) 102px,
                            transparent 102px,
                            transparent 200px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 150px,
                            rgba(255, 255, 255, 0.2) 150px,
                            rgba(255, 255, 255, 0.2) 152px,
                            transparent 152px,
                            transparent 300px
                        )
                    `,
                    pointerEvents: 'none',
                    zIndex: 1
                }}></div>

                {/* Content Container - Flex layout with logos and text */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '60px',
                    position: 'relative',
                    zIndex: 2
                }}>
                    {/* Left Logo - SNU */}
                    <div style={logoStyle}>
                        <img
                            src={`${BASE_URL}photos/snu.png`}
                            alt="SNU Logo"
                            className="w-full h-full object-contain p-3"
                        />
                    </div>

                    {/* Center Text Content */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        textAlign: 'center'
                    }}>
                        {/* Main Heading - Grand Opening */}
                        <h1 style={{
                            fontSize: '90px',
                            fontWeight: '900',
                            color: 'white',
                            letterSpacing: '3px',
                            lineHeight: '1',
                            margin: 0,
                            textTransform: 'uppercase',
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            Grand Opening: Dept. of Dairy Science at NUOL
                        </h1>

                        {/* Subheading - Seoul National University */}
                        <p style={{
                            fontSize: '48px',
                            fontWeight: '600',
                            color: '#d4af37', // Elegant gold color
                            letterSpacing: '2px',
                            lineHeight: '1',
                            margin: 0,
                            fontFamily: "'Roboto', sans-serif"
                        }}>
                            Seoul National University Leading University Project
                        </p>
                    </div>

                    {/* Right Logo - NUOL */}
                    <div style={logoStyle}>
                        <img
                            src={`${BASE_URL}photos/nuol.png`}
                            alt="NUOL Logo"
                            className="w-full h-full object-contain p-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HangingBanner2;
