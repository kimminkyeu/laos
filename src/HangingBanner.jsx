// src/HangingBanner.jsx
import React from 'react';

const HangingBanner = () => {
    const BASE_URL = import.meta.env.BASE_URL;
    const bannerStyle = {
        width: '1200px',
        height: '60px',
        backgroundColor: 'white',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
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
        zIndex: 20,
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <div style={bannerStyle}>
                {/* Top Section - White background with title and subtitle */}
                <div className="h-[65%] bg-white flex flex-col items-center justify-center px-4">
                    <h1 className="text-[#1f3578] font-black text-xl tracking-wide leading-none">
                        SNU - NUOL
                    </h1>
                    <p className="text-[#1f3578] font-semibold text-[10px] leading-tight tracking-tight mt-0.5">
                        Remodeling the livestock department (dairy course) of the National University of Laos
                    </p>
                </div>

                {/* Bottom Section - Blue background */}
                <div className="h-[35%] bg-[#89a5c8] flex items-center justify-center px-4">
                    <p className="text-white font-bold text-[11px] tracking-wider uppercase whitespace-nowrap leading-none">
                        SNU LEADING UNIVERSITY PROJECTS FOR INTERNATIONAL COOPERATION
                    </p>
                </div>

                {/* Logos */}
                <div style={{...logoStyle, left: '20px'}}>
                    <img
                        src={`${BASE_URL}photos/snu.png`}
                        alt="SNU Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div style={{...logoStyle, right: '20px'}}>
                    <img
                        src={`${BASE_URL}photos/nuol.png`}
                        alt="NUOL Logo"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default HangingBanner;
