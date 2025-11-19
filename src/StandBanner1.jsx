// src/StandBanner1.jsx
import React from 'react';

const StandBanner1 = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6b7a87', padding: '32px' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>→</div>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold', lineHeight: '1.2', margin: 0 }}>
                            INTERNATIONAL COOPERATION
                        </h1>
                        <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '500', lineHeight: '1.2', margin: 0 }}>
                            Leading University Project
                        </h2>
                    </div>
                    <div style={{ color: 'white', fontSize: '60px', opacity: 0.3 }}>»»</div>
                </div>

                {/* Map Section */}
                <div style={{ backgroundColor: '#8a9ba8', borderRadius: '8px', padding: '24px', marginBottom: '16px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '448px', marginBottom: '24px' }}>
                        {/* Simple map representation */}
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', width: '192px', height: '192px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
                                <div>Seoul, KOREA</div>
                                <div style={{ marginTop: '8px' }}>↓</div>
                                <div style={{ marginTop: '8px' }}>Vientiane</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div style={{ backgroundColor: '#5a6872', borderRadius: '8px', padding: '16px', width: '100%' }}>
                        <h3 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', marginTop: 0 }}>
                            International Development Aid
                        </h3>
                        <div style={{ backgroundColor: '#4a5862', borderRadius: '4px', padding: '12px', marginBottom: '12px' }}>
                            <p style={{ color: 'white', fontSize: '16px', margin: 0 }}>
                                Major ODA Partner Countries
                            </p>
                        </div>
                        <p style={{ color: 'white', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                            Supporting sustainable development<br/>
                            through agricultural cooperation.<br/>
                            (2012~Present)
                        </p>
                    </div>
                </div>

                <div style={{ color: 'white', fontSize: '60px', opacity: 0.3, textAlign: 'right' }}>»»</div>
            </div>
        </div>
    );
};

export default StandBanner1;
