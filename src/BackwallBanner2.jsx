// src/BackwallBanner2.jsx
// 2m x 1.6m Backwall Banner - Farm Theme
import React from 'react';

const BackwallBanner2 = () => {
    const BASE_URL = import.meta.env.BASE_URL;

    const bannerStyle = {
        width: '2000px',
        height: '1300px',
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
                    src={`${BASE_URL}photos/farm-sample.jpeg`}
                    alt="Farm Background"
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
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '80px'
            }}>
                {/* You can add title, logos, or other content here */}
            </div>
        </div>
    );
};

export default BackwallBanner2;
