// src/StandBanner3Editor.jsx
import React, { useEffect, useRef, useState } from 'react';
import StandBanner3 from './StandBanner3.jsx';

const StandBanner3Editor = () => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;

                const bannerWidth = 500;
                const bannerHeight = 1500;

                const scaleX = (containerWidth - 40) / bannerWidth; // 40px padding
                const scaleY = (containerHeight - 40) / bannerHeight;

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
                backgroundColor: '#1f2937',
                overflow: 'hidden'
            }}
        >
            <div style={{
                width: '500px',
                height: '1500px',
                transform: `scale(${scale})`,
                transformOrigin: 'center center'
            }}>
                <StandBanner3 />
            </div>
        </div>
    );
};

export default StandBanner3Editor;
