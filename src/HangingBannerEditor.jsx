// src/HangingBannerEditor.jsx
import React, { useEffect, useRef, useState } from 'react';
import HangingBanner from './HangingBanner.jsx';

const HangingBannerEditor = () => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                const bannerWidth = 1200;
                const bannerHeight = 60;

                const scaleX = (containerWidth - 80) / bannerWidth; // 80px padding
                const scaleY = (containerHeight - 80) / bannerHeight;

                const newScale = Math.min(scaleX, scaleY, 1);
                setScale(newScale);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#e5e7eb',
                overflow: 'hidden'
            }}
        >
            <div style={{
                width: '1200px',
                height: '60px',
                transform: `scale(${scale})`,
                transformOrigin: 'center center'
            }}>
                <HangingBanner />
            </div>
        </div>
    );
};

export default HangingBannerEditor;
