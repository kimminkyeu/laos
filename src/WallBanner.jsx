// src/WallBanner.jsx
import React from 'react';

const WallBanner = () => {
    const bannerStyle = {
        width: '4000px',
        height: '1600px',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        fontFamily: "'Roboto', 'Noto Sans KR', sans-serif",
        overflow: 'hidden',
    };

    // Consistent spacing
    const ZONE_PADDING = 40; // Consistent left-right padding for all zones
    const VERTICAL_GAP = 40; // Gap between visual area and text area

    // Layout calculations (matching HTML example)
    const headerHeight = 160; // 10% of 1600px
    const footerHeight = 128; // 8% of 1600px
    const contentTop = headerHeight + 30;
    const contentBottom = 1600 - footerHeight - 20;
    const contentHeight = contentBottom - contentTop;

    const visualBandTop = contentTop;
    const visualBandHeight = contentHeight * 0.65; // 65% for images
    const textBandTop = visualBandTop + visualBandHeight + VERTICAL_GAP;

    return (
            <div style={bannerStyle}>
                {/* Header Bar */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: `${headerHeight}px`,
                    backgroundColor: '#0f265d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 60px',
                    zIndex: 10
                }}>
                    {/* Left: Logos */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', height: '70px' }}>
                        <img src="/photos/snu.png" style={{ height: '100%', objectFit: 'contain' }} alt="SNU Logo" />
                        <img src="/photos/nuol.png" style={{ height: '100%', objectFit: 'contain' }} alt="NUOL Logo" />
                    </div>

                    {/* Right: Section Navigation */}
                    <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                        <div style={{ color: 'white', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>01 GLOBAL</div>
                        <div style={{ color: 'white', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>02 CONNECTION</div>
                        <div style={{ color: 'white', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>03 PROCESS</div>
                        <div style={{ color: 'white', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>04 RESULT</div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div style={{
                    position: 'absolute',
                    top: `${headerHeight}px`,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex'
                }}>
                    {/* ZONE 1: Global Context (15% = 600px) */}
                    <div style={{
                        width: '600px',
                        backgroundColor: '#eff6ff',
                        position: 'relative',
                        padding: `0 ${ZONE_PADDING}px`
                    }}>
                        {/* Section Number */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '48px',
                            fontWeight: '900',
                            color: '#1e3a8a',
                            opacity: 0.2
                        }}>01</div>

                        {/* Title */}
                        <h2 style={{
                            marginTop: '80px',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#1f3578',
                            marginBottom: '0',
                            lineHeight: '1.2'
                        }}>
                            International<br/>Cooperation
                        </h2>

                        {/* Visual Band Area */}
                        <div style={{
                            position: 'absolute',
                            top: `${visualBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            height: `${visualBandHeight}px`,
                            backgroundColor: '#bfdbfe',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '40px'
                        }}>
                            {/* World Map Placeholder */}
                            <div style={{
                                width: '100%',
                                height: '60%',
                                backgroundColor: '#93c5fd',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '40px'
                            }}>
                                <div style={{ textAlign: 'center', color: '#1e3a8a', fontSize: '18px', fontWeight: '600' }}>
                                    World Map<br/>Korea → 18 Countries
                                </div>
                            </div>

                            {/* Statistics */}
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '96px', fontWeight: '900', color: '#1e3a8a', lineHeight: '1' }}>18</div>
                                <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e3a8a', marginTop: '8px' }}>Countries</div>
                                <div style={{ fontSize: '64px', fontWeight: '900', color: '#1e3a8a', marginTop: '20px', lineHeight: '1' }}>53</div>
                                <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e3a8a', marginTop: '8px' }}>Project Teams</div>
                            </div>
                        </div>

                        {/* Text Area */}
                        <div style={{
                            position: 'absolute',
                            top: `${textBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            bottom: '20px',
                            display: 'flex',
                            gap: '30px'
                        }}>
                            {/* Left Column */}
                            <div style={{
                                flex: '0 0 240px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: '#1e3a8a',
                                    lineHeight: '1.3'
                                }}>
                                    Global Reach
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    lineHeight: '1.5'
                                }}>
                                    Leading University Projects for International Development
                                </p>
                            </div>
                            {/* Right Column */}
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#6b7280',
                                    lineHeight: '1.6'
                                }}>
                                    Seoul National University has established partnerships with 18 countries across Asia, Africa, and Latin America, implementing 53 development cooperation projects that address local challenges through academic excellence and sustainable solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ZONE 2: The Connection (25% = 1000px) */}
                    <div style={{
                        width: '1000px',
                        backgroundColor: '#f0f9ff',
                        position: 'relative',
                        padding: `0 ${ZONE_PADDING}px`,
                        borderLeft: '2px solid #dbeafe'
                    }}>
                        {/* Section Number */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '48px',
                            fontWeight: '900',
                            color: '#1e40af',
                            opacity: 0.2
                        }}>02</div>

                        {/* Title */}
                        <h2 style={{
                            marginTop: '80px',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#1f3578',
                            marginBottom: '0',
                            lineHeight: '1.2'
                        }}>
                            SNU-NUOL<br/>Partnership
                        </h2>

                        {/* Visual Band Area - 2 columns */}
                        <div style={{
                            position: 'absolute',
                            top: `${visualBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            height: `${visualBandHeight}px`,
                            display: 'flex',
                            gap: '20px'
                        }}>
                            {/* Left: Main Photo (60%) */}
                            <div style={{
                                flex: '0 0 60%',
                                backgroundColor: '#93c5fd',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#1e3a8a'
                            }}>
                                MOU Signing<br/>Main Photo
                            </div>

                            {/* Right: 3 Sub Photos stacked (40%) */}
                            <div style={{
                                flex: '0 0 calc(40% - 20px)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px'
                            }}>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#bfdbfe',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#1e3a8a'
                                }}>Campus</div>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#bfdbfe',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#1e3a8a'
                                }}>Meeting</div>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#bfdbfe',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#1e3a8a'
                                }}>Team</div>
                            </div>
                        </div>

                        {/* Text Area */}
                        <div style={{
                            position: 'absolute',
                            top: `${textBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            bottom: '20px',
                            display: 'flex',
                            gap: '30px'
                        }}>
                            {/* Left Column */}
                            <div style={{
                                flex: '0 0 340px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: '#1e40af',
                                    lineHeight: '1.3'
                                }}>
                                    Strategic Partnership
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#1f3578',
                                    lineHeight: '1.5'
                                }}>
                                    "Responding to local demand for dairy professionals"
                                </p>
                            </div>
                            {/* Right Column */}
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#6b7280',
                                    lineHeight: '1.6'
                                }}>
                                    SNU and the National University of Laos signed an MOU in 2019 to establish the first dairy science department in Laos, combining Korean expertise in agricultural education with local knowledge to build a sustainable dairy industry workforce.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ZONE 3: The Process (35% = 1400px) */}
                    <div style={{
                        width: '1400px',
                        backgroundColor: '#f0fdfa',
                        position: 'relative',
                        padding: `0 ${ZONE_PADDING}px`,
                        borderLeft: '2px solid #ccfbf1'
                    }}>
                        {/* Section Number */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '48px',
                            fontWeight: '900',
                            color: '#0f766e',
                            opacity: 0.2
                        }}>03</div>

                        {/* Title */}
                        <h2 style={{
                            marginTop: '80px',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#0f766e',
                            marginBottom: '0',
                            lineHeight: '1.2'
                        }}>
                            Transformation<br/>Process
                        </h2>

                        {/* Visual Band Area - 4 Cards with Arrows */}
                        <div style={{
                            position: 'absolute',
                            top: `${visualBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            height: `${visualBandHeight}px`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            {/* Card 1 */}
                            <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#99f6e4',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#0f766e',
                                    marginBottom: '12px'
                                }}>Facility<br/>Improvement</div>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    color: '#374151',
                                    textAlign: 'center'
                                }}>Infrastructure upgrade</div>
                            </div>

                            {/* Arrow */}
                            <div style={{ fontSize: '32px', color: '#14b8a6', fontWeight: 'bold' }}>▶</div>

                            {/* Card 2 */}
                            <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#99f6e4',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#0f766e',
                                    marginBottom: '12px'
                                }}>Equipment<br/>Introduction</div>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    color: '#374151',
                                    textAlign: 'center'
                                }}>Modern dairy equipment</div>
                            </div>

                            {/* Arrow */}
                            <div style={{ fontSize: '32px', color: '#14b8a6', fontWeight: 'bold' }}>▶</div>

                            {/* Card 3 */}
                            <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#99f6e4',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#0f766e',
                                    marginBottom: '12px'
                                }}>Faculty<br/>Development</div>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    color: '#374151',
                                    textAlign: 'center'
                                }}>Capacity building</div>
                            </div>

                            {/* Arrow */}
                            <div style={{ fontSize: '32px', color: '#14b8a6', fontWeight: 'bold' }}>▶</div>

                            {/* Card 4 */}
                            <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{
                                    flex: 1,
                                    backgroundColor: '#99f6e4',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#0f766e',
                                    marginBottom: '12px'
                                }}>Curriculum<br/>Design</div>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'white',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    color: '#374151',
                                    textAlign: 'center'
                                }}>Program establishment</div>
                            </div>
                        </div>

                        {/* Text Area */}
                        <div style={{
                            position: 'absolute',
                            top: `${textBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            bottom: '20px',
                            display: 'flex',
                            gap: '40px'
                        }}>
                            {/* Left Column */}
                            <div style={{
                                flex: '0 0 420px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: '#0f766e',
                                    lineHeight: '1.3'
                                }}>
                                    Four-Phase Transformation
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#374151',
                                    lineHeight: '1.5'
                                }}>
                                    Systematic approach to building sustainable dairy science education
                                </p>
                            </div>
                            {/* Right Column */}
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#6b7280',
                                    lineHeight: '1.6'
                                }}>
                                    The project encompasses comprehensive facility upgrades, introduction of modern dairy technology, intensive faculty training programs, and collaborative curriculum design to ensure long-term sustainability and educational excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ZONE 4: The Result (25% = 1000px) */}
                    <div style={{
                        width: '1000px',
                        backgroundColor: '#fffbeb',
                        position: 'relative',
                        padding: `0 ${ZONE_PADDING}px`,
                        borderLeft: '2px solid #fef3c7'
                    }}>
                        {/* Section Number */}
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '48px',
                            fontWeight: '900',
                            color: '#d97706',
                            opacity: 0.2
                        }}>04</div>

                        {/* Title */}
                        <h2 style={{
                            marginTop: '80px',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: '#d97706',
                            marginBottom: '0',
                            lineHeight: '1.2'
                        }}>
                            Achievement<br/>& Future
                        </h2>

                        {/* Visual Band Area - Hero Image with Overlay */}
                        <div style={{
                            position: 'absolute',
                            top: `${visualBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            height: `${visualBandHeight}px`,
                            backgroundColor: '#fcd34d',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            {/* Photo Placeholder */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#92400e'
                            }}>
                                Ceremony Photo<br/>Students & Faculty
                            </div>

                            {/* Overlay Box */}
                            <div style={{
                                position: 'absolute',
                                bottom: '60px',
                                left: '60px',
                                right: '60px',
                                padding: '40px',
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '12px',
                                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)',
                                border: '3px solid #f59e0b'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '36px',
                                    fontWeight: '900',
                                    color: '#d97706',
                                    lineHeight: '1.3',
                                    textAlign: 'center'
                                }}>
                                    Laos' First Dairy Science<br/>Department Established
                                </h3>
                                <p style={{
                                    margin: '16px 0 0 0',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#92400e',
                                    textAlign: 'center'
                                }}>
                                    Training the next generation of dairy specialists
                                </p>
                            </div>
                        </div>

                        {/* Text Area */}
                        <div style={{
                            position: 'absolute',
                            top: `${textBandTop}px`,
                            left: `${ZONE_PADDING}px`,
                            right: `${ZONE_PADDING}px`,
                            bottom: '20px',
                            display: 'flex',
                            gap: '30px'
                        }}>
                            {/* Left Column */}
                            <div style={{
                                flex: '0 0 340px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px'
                            }}>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '22px',
                                    fontWeight: '800',
                                    color: '#d97706',
                                    lineHeight: '1.3'
                                }}>
                                    Milestone Achievement
                                </h3>
                                <p style={{
                                    margin: 0,
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#92400e',
                                    lineHeight: '1.5'
                                }}>
                                    Laos' First Dairy Science Department Successfully Established
                                </p>
                            </div>
                            {/* Right Column */}
                            <div style={{ flex: 1 }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '13px',
                                    color: '#6b7280',
                                    lineHeight: '1.6'
                                }}>
                                    In 2023, the department welcomed its first cohort of 30 students, marking a historic moment in Lao agricultural education. The program now trains the next generation of dairy specialists who will drive the nation's dairy industry development and food security.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default WallBanner;
