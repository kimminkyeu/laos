// src/BackwallBanner1.jsx
// 2m x 1.6m Backwall Banner - Milky Way Theme
import React from 'react';

const BackwallBanner1 = () => {
    const BASE_URL = import.meta.env.BASE_URL;

    const bannerStyle = {
        width: '2000px',
        height: '1600px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
    };

    return (
        <div style={bannerStyle}>
            {/* Background Image - Full Coverage */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <img
                    src={`${BASE_URL}photos/milky-way-small-sample.png`}
                    alt="Milky Way Background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* Optional Overlay for text readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                zIndex: 1
            }}></div>

            {/* Content Layer */}
            <div style={{
                position: 'absolute',
                top: '60px',
                left: '60px',
                right: '60px',
                zIndex: 2
            }}>
                {/* Title Text */}
                <h1 style={{
                    fontSize: '72px',
                    fontWeight: '900',
                    color: '#1f3578',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: '1.3',
                    textShadow: '0 4px 12px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(255, 255, 255, 0.6)',
                    fontFamily: "'Roboto', sans-serif",
                    letterSpacing: '1px'
                }}>
                    The future of Lao dairy advances with the National University
                </h1>
            </div>
        </div>
    );
};

export default BackwallBanner1;
