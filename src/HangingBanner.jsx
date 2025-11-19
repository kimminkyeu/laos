// src/HangingBanner.jsx
import React from 'react';

const HangingBanner = () => {
    const bannerStyle = {
        width: '1200px',
        height: '60px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
        overflow: 'hidden',
    };

    const logoStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '54px',
        width: '54px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        border: '2px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
             <div style={bannerStyle}>
                {/* Backgrounds */}
                <div className="absolute top-0 left-0 w-full h-[70%] bg-white z-0"></div>
                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#89a5c8] z-0 flex items-center justify-center">
                    <p className="text-white font-bold text-sm tracking-wider uppercase whitespace-nowrap">
                        SNU Leading University Projects for International Cooperation
                    </p>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div style={{...logoStyle, left: '20px'}}>
                        <img src="/photos/라오스국립대 로고.png" alt="NUOL Logo" className="max-w-full max-h-full object-contain p-1" />
                    </div>

                    <div className="text-center text-[#1f3578]">
                        <h1 className="text-2xl font-black tracking-wide leading-tight">NUOL - SNU</h1>
                        <p className="font-semibold text-xs leading-none tracking-tight mt-1">
                            Remodeling the livestock department (dairy course) of the National University of Laos
                        </p>
                    </div>

                    <div style={{...logoStyle, right: '20px'}}>
                        <img src="/photos/서울대로고.png" alt="SNU Logo" className="max-w-full max-h-full object-contain p-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HangingBanner;
