// src/WallBanner.jsx
import React, { useState, useEffect } from 'react';

const WallBanner = () => {
    // Helper to preload images, important for html2canvas
    const useImagePreloader = (imagePaths) => {
        const [imagesLoaded, setImagesLoaded] = useState(false);

        useEffect(() => {
            const loadImage = (src) => new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });

            Promise.all(imagePaths.map(loadImage))
                .then(() => setImagesLoaded(true))
                .catch(err => console.error("Failed to preload images:", err));
        }, [imagePaths]);

        return imagesLoaded;
    };

    const imagePaths = [
        '/photos/서울대로고.png',
        '/photos/라오스국립대 로고.png',
        '/photos/1.선도대학 사업/세계 선도 대학.png',
        '/photos/2.사업 승인까지의 과정/1-1. 1685367353542.jpg',
        '/photos/2.사업 승인까지의 과정/1-2. FB_IMG_1716934774545.jpg', 
        '/photos/3. 낙농실습목장 (현재)/1.jpg',
        '/photos/3. 낙농실습목장 (현재)/2.jpg',
        '/photos/3. 낙농실습목장 (현재)/3.jpg',
        '/photos/4. 낙농실습목장 (미래)/5.jpg'
    ];

    const imagesLoaded = useImagePreloader(imagePaths);

    if (!imagesLoaded) {
        return (
            <div className="banner-container flex items-center justify-center bg-gray-100 text-gray-700 font-bold text-2xl"
                 style={{aspectRatio: '400 / 160', width: '100%', maxWidth: '1200px', height: 'auto'}}>
                Loading Images...
            </div>
        );
    }

    return (
        <div id="wall-banner-content-for-export" className="banner-container flex flex-col relative overflow-hidden"
             style={{aspectRatio: '400 / 160', width: '100%', height: 'auto'}}>
            {/* Header */}
            <header className="h-[10%] bg-[#0f265d] flex items-center px-[2vw] justify-between z-10 shrink-0">
                <div className="flex items-center gap-[1vw] h-full py-[0.5vw]">
                    <img src="/photos/서울대로고.png" className="h-[80%] object-contain" alt="SNU Logo" />
                    <img src="/photos/라오스국립대 로고.png" className="h-[80%] object-contain" alt="NUOL Logo" />
                </div>
                <h1 className="text-white font-bold text-[1.6vw] tracking-tight text-right">국제협력선도대학 육성지원사업: 라오스 국립대 낙농학과 신설</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex p-[1.2vw] gap-[1.2vw] relative min-h-0">
                
                {/* ZONE 1: Global Context (Blue Theme) */}
                <section className="w-[20%] flex flex-col gap-[0.8vw] p-[1vw] bg-blue-50 border-t-4 border-blue-500 rounded-lg">
                    <h2 className="font-bold text-gray-800 text-[1.1vw] leading-tight">1. 국제협력 선도대학</h2>
                    <div className="relative flex-1 rounded-lg overflow-hidden min-h-0">
                        <img src="/photos/1.선도대학 사업/세계 선도 대학.png" className="w-full h-full object-cover" alt="World map" />
                        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white text-center p-2">
                            <div className="font-black text-[2.5vw] drop-shadow-md">18<span className="text-[1.5vw]">개국</span></div>
                            <div className="font-black text-[2.5vw] drop-shadow-md">53<span className="text-[1.5vw]">개 사업단</span></div>
                        </div>
                    </div>
                </section>

                {/* ZONE 2: The Connection (Blue Theme) */}
                <section className="w-[20%] flex flex-col gap-[0.8vw] p-[1vw] bg-blue-50 border-t-4 border-blue-500 rounded-lg">
                    <h2 className="font-bold text-gray-800 text-[1.1vw] leading-tight">2. 서울대와 라오스의 연결</h2>
                    <div className="flex-1 flex flex-col gap-[0.5vw] min-h-0">
                        {/* MOU signing */}
                        <div className="flex-1 rounded-lg overflow-hidden min-h-0">
                            <img src="/photos/2.사업 승인까지의 과정/1-1. 1685367353542.jpg" className="w-full h-full object-cover" alt="MOU signing" />
                        </div>
                        {/* NUOL Campus */}
                        <div className="flex-1 rounded-lg overflow-hidden min-h-0">
                            <img src="/photos/2.사업 승인까지의 과정/1-2. FB_IMG_1716934774545.jpg" className="w-full h-full object-cover" alt="NUOL Campus" />
                        </div>
                    </div>
                    <p className="text-gray-600 text-[0.7vw] leading-snug bg-gray-100 p-[0.5vw] rounded text-center">"라오스 현지의 수요: 낙농 인재 양성의 필요성 대두"</p>
                </section>

                {/* ZONE 3: The Process (Green/Teal Theme) */}
                <section className="w-[20%] flex flex-col gap-[0.8vw] p-[1vw] bg-teal-50 border-t-4 border-teal-500 rounded-lg">
                    <h2 className="font-bold text-gray-800 text-[1.1vw] leading-tight">3. 변화와 준비의 과정</h2>
                    <div className="flex-1 flex flex-col gap-[0.5vw] min-h-0">
                        <div className="flex-1 rounded-lg overflow-hidden min-h-0">
                            <img src="/photos/3. 낙농실습목장 (현재)/1.jpg" className="w-full h-full object-cover" alt="Facility Remodeling" />
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden min-h-0">
                            <img src="/photos/3. 낙농실습목장 (현재)/2.jpg" className="w-full h-full object-cover" alt="Equipment Setup" />
                        </div>
                        <div className="flex-1 rounded-lg overflow-hidden min-h-0">
                            <img src="/photos/3. 낙농실습목장 (현재)/3.jpg" className="w-full h-full object-cover" alt="Curriculum Development" />
                        </div>
                    </div>
                </section>

                {/* ZONE 4: The Result (Yellow/Orange Theme) */}
                <section className="flex-1 flex flex-col gap-[0.8vw] p-[1vw] bg-yellow-50 border-4 border-yellow-400 rounded-lg shadow-lg">
                    <h2 className="font-bold text-gray-900 text-[1.3vw] leading-tight">4. 라오스 국립대 낙농학과<br/>신설의 결실</h2>
                    <div className="flex-1 rounded-lg shadow-inner overflow-hidden min-h-0">
                        <img src="/photos/4. 낙농실습목장 (미래)/5.jpg" className="w-full h-full object-cover" alt="The result - new dairy department" />
                    </div>
                    <div className="p-[0.5vw] rounded">
                        <p className="text-[1.1vw] font-extrabold text-gray-800 text-center">"라오스 최초의 낙농 전문가, 여기서 시작됩니다."</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default WallBanner;
