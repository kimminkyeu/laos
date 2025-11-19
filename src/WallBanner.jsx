// src/WallBanner.jsx
import React from 'react';

const WallBanner = () => {
    const bannerStyle = {
        width: '1600px',
        height: '640px',
        aspectRatio: '400 / 160',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
        overflow: 'hidden',
    };

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
            <div style={bannerStyle}>
                {/* Header */}
                <div style={{ height: '10%', backgroundColor: '#0f265d', display: 'flex', alignItems: 'center', paddingLeft: '32px', paddingRight: '32px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', height: '100%', paddingTop: '8px', paddingBottom: '8px' }}>
                        <img src="/photos/snu.png" style={{ height: '80%', objectFit: 'contain' }} alt="SNU Logo" />
                        <img src="/photos/nuol.png" style={{ height: '80%', objectFit: 'contain' }} alt="NUOL Logo" />
                    </div>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '24px', letterSpacing: '-0.025em', textAlign: 'right', margin: 0 }}>
                        Leading University for International Cooperation: Establishing Dairy Department at NUOL
                    </h1>
                </div>

                {/* Main Content */}
                <div style={{ flex: 1, display: 'flex', padding: '20px', gap: '20px', backgroundColor: '#f9fafb' }}>

                    {/* ZONE 1 */}
                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: '#eff6ff', borderTop: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h2 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '18px', margin: 0 }}>1. International Cooperation</h2>
                        <div style={{ flex: 1, backgroundColor: '#bfdbfe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontWeight: 900, fontSize: '48px', color: '#1e3a8a' }}>18</div>
                                <div style={{ fontWeight: 900, fontSize: '48px', color: '#1e3a8a' }}>Countries</div>
                            </div>
                        </div>
                    </div>

                    {/* ZONE 2 */}
                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: '#eff6ff', borderTop: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h2 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '18px', margin: 0 }}>2. SNU & Laos Connection</h2>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px' }}></div>
                            <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px' }}></div>
                        </div>
                        <p style={{ color: '#4b5563', fontSize: '12px', backgroundColor: '#f3f4f6', padding: '8px', borderRadius: '4px', textAlign: 'center', margin: 0 }}>
                            "Local demand: Need for dairy professionals"
                        </p>
                    </div>

                    {/* ZONE 3 */}
                    <div style={{ width: '20%', display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: '#f0fdfa', borderTop: '4px solid #14b8a6', borderRadius: '8px' }}>
                        <h2 style={{ fontWeight: 'bold', color: '#1f2937', fontSize: '18px', margin: 0 }}>3. Process of Change</h2>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px' }}></div>
                            <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px' }}></div>
                            <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px' }}></div>
                        </div>
                    </div>

                    {/* ZONE 4 */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: '#fefce8', border: '4px solid #facc15', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontWeight: 'bold', color: '#111827', fontSize: '20px', margin: 0 }}>
                            4. NUOL Dairy Department<br/>Establishment Success
                        </h2>
                        <div style={{ flex: 1, backgroundColor: '#d1d5db', borderRadius: '8px', boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)' }}></div>
                        <div style={{ padding: '8px', borderRadius: '4px' }}>
                            <p style={{ fontSize: '20px', fontWeight: 800, color: '#1f2937', textAlign: 'center', margin: 0 }}>
                                "Laos' first dairy specialists start here."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WallBanner;
