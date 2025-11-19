// src/WallBannerEditor.jsx
import React from 'react';
import html2canvas from 'html2canvas'; // Import html2canvas

// Assume WallBanner.jsx is in the same directory or properly imported
import WallBanner from './WallBanner.jsx';

const WallBannerEditor = () => {
    const handleDownload = () => {
        const bannerElement = document.getElementById('wall-banner-content-for-export');
        if (bannerElement) {
            html2canvas(bannerElement, {
                scale: 2, // Capture at higher resolution
                useCORS: true,
                backgroundColor: '#ffffff' // Ensure consistent background
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'wall_banner_exported.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            }).catch(err => {
                console.error("Error exporting canvas: ", err);
            });
        } else {
            console.error("Banner element not found for download.");
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-4 bg-gray-100">
            <div className="w-full max-w-6xl flex flex-col items-center">
                <div className="my-4 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">Wall Banner Editor</h1>
                    <p className="text-gray-600">Edit <code className="bg-gray-200 px-1 rounded">src/WallBanner.jsx</code> to see changes here.</p>
                </div>

                {/* The WallBanner component is rendered here for preview */}
                <div id="wall-banner-content-for-export" className="w-full">
                    <WallBanner />
                </div>

                <div className="my-6">
                    <button 
                        onClick={handleDownload}
                        className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                    >
                        디자인 이미지로 저장 (wall_banner_exported.png)
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                        저장한 파일은 프로젝트 루트 디렉토리(예: <code className="bg-gray-200 px-1 rounded">/public/</code> 또는 현재 프로젝트 폴더)에 위치해야 합니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WallBannerEditor;
