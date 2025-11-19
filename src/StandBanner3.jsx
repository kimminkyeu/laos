// src/StandBanner3.jsx
import React from 'react';

const StandBanner3 = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4a9b8e', padding: '32px' }}>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Header Section */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>→</div>
                    <div style={{ flex: 1 }}>
                        <h1 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold', lineHeight: '1.2', margin: 0 }}>
                            DEPARTMENT ESTABLISHMENT:
                        </h1>
                        <h2 style={{ color: 'white', fontSize: '24px', fontWeight: '500', lineHeight: '1.2', margin: 0 }}>
                            Curriculum & Process
                        </h2>
                    </div>
                    <div style={{ color: 'white', fontSize: '60px', opacity: 0.3 }}>»»</div>
                </div>

                {/* Content Section */}
                <div style={{ backgroundColor: '#6dbfb0', borderRadius: '8px', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
                    {/* Item 1 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', padding: '12px', flexShrink: 0 }}>
                            <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: 0 }}>
                                Livestock Department
                            </h3>
                            <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>
                                Training and education support
                            </p>
                        </div>
                        <div style={{ color: 'white', fontSize: '30px' }}>→</div>
                    </div>

                    {/* Item 2 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', padding: '12px', flexShrink: 0 }}>
                            <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: 0 }}>
                                Equipment & Facilities
                            </h3>
                            <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>
                                Modern infrastructure development<br/>
                                for agricultural research
                            </p>
                        </div>
                        <div style={{ color: 'white', fontSize: '30px' }}>→</div>
                    </div>

                    {/* Item 3 */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '16px' }}>
                        <div style={{ backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', padding: '12px', flexShrink: 0 }}>
                            <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', marginTop: 0 }}>
                                Faculty Development
                            </h3>
                            <p style={{ color: 'white', fontSize: '14px', margin: 0 }}>
                                Capacity building programs
                            </p>
                        </div>
                        <div style={{ color: 'white', fontSize: '30px' }}>→</div>
                    </div>
                </div>

                <div style={{ color: 'white', fontSize: '60px', opacity: 0.3, textAlign: 'right', marginTop: '16px' }}>»»</div>
            </div>
        </div>
    );
};

export default StandBanner3;
