// src/ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import html2canvas from 'html2canvas';
import WallBanner from './WallBanner.jsx';
import StandBanner1 from './StandBanner1.jsx';
import StandBanner3 from './StandBanner3.jsx';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // This effect runs once when the component mounts
        const currentMount = mountRef.current;

        // === Start of THREE.js Code from 3d.html ===
        
        // 1. Scene Setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        scene.fog = new THREE.Fog(0xffffff, 10, 50);

        const camera = new THREE.PerspectiveCamera(45, currentMount.clientWidth / currentMount.clientHeight, 0.1, 100);
        camera.position.set(8, 6, 8);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        currentMount.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.target.set(0, 1, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
        dirLight.position.set(5, 10, 7);
        dirLight.castShadow = true;
        scene.add(dirLight);

        // --- TEXTURE GENERATION FOR BANNER ---
        function createBannerTexture(widthM, heightM) {
            const canvas = document.createElement('canvas');
            const scaleFactor = 100;
            canvas.width = widthM * scaleFactor * 2;
            canvas.height = heightM * scaleFactor * 2;
            const ctx = canvas.getContext('2d');
            const w = canvas.width;
            const h = canvas.height;
            const snuBlue = '#1f3578';
            const lightBlue = '#89a5c8';

            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, w, h * 0.7);
            ctx.fillStyle = lightBlue;
            ctx.fillRect(0, h * 0.7, w, h * 0.3);

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = snuBlue;
            ctx.font = `900 ${h * 0.35}px Roboto, sans-serif`;
            ctx.fillText("NUOL - SNU", w / 2, h * 0.35);
            ctx.font = `600 ${h * 0.12}px Noto Sans KR, sans-serif`;
            ctx.fillText("Remodeling the livestock department (dairy course) of the National University of Laos", w / 2, h * 0.55);
            ctx.fillStyle = 'white';
            ctx.font = `700 ${h * 0.15}px Roboto, sans-serif`;
            ctx.fillText("SNU Leading University Projects for International Cooperation", w / 2, h * 0.85);

            const texture = new THREE.CanvasTexture(canvas);
            const loadImage = (src, x, y) => new Promise((resolve) => {
                 const img = new Image();
                 img.crossOrigin = "Anonymous";
                 img.onload = () => {
                    const radius = h * 0.4;
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(x, h/2, radius/2, 0, Math.PI * 2);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    ctx.shadowColor = "rgba(0,0,0,0.2)";
                    ctx.shadowBlur = 10;
                    ctx.shadowOffsetY = 5;
                    ctx.stroke();
                    ctx.clip();
                    ctx.drawImage(img, x - radius/2, h/2 - radius/2, radius, radius);
                    ctx.restore();
                    texture.needsUpdate = true;
                    resolve();
                 };
                 img.src = src;
            });

            Promise.all([
                loadImage("/photos/라오스국립대 로고.png", w * 0.08, h/2),
                loadImage("/photos/서울대로고.png", w - (w * 0.08), h/2)
            ]);
            
            return texture;
        }

        // --- Helper Functions ---
        function createEdgeMaterial() { return new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 1 }); }
        function createFaceMaterial(color = 0xffffff) { return new THREE.MeshLambertMaterial({ color: color, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }); }
        function createTextTexture(text) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 512; canvas.height = 128;
            ctx.font = `bold 40px Arial`;
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width/2, canvas.height/2);
            return new THREE.CanvasTexture(canvas);
        }
        function createSketchObject(geometry, color, x, y, z, rx=0, ry=0, rz=0, customMaterial=null) {
            const group = new THREE.Group();
            const material = customMaterial ? customMaterial : createFaceMaterial(color);
            const mesh = new THREE.Mesh(geometry, material);
            mesh.castShadow = true; mesh.receiveShadow = true;
            group.add(mesh);
            const edges = new THREE.EdgesGeometry(geometry);
            const line = new THREE.LineSegments(edges, createEdgeMaterial());
            group.add(line);
            group.position.set(x, y, z);
            group.rotation.set(rx, ry, rz);
            scene.add(group);
            return { group, mesh };
        }
        
        // --- Booth Construction ---
        const gridHelper = new THREE.GridHelper(20, 20, 0xdddddd, 0xeeeeee);
        scene.add(gridHelper);

        const pillarGeo = new THREE.BoxGeometry(0.1, 2.5, 0.1);
        createSketchObject(pillarGeo, 0x999999, -2.95, 1.25, -1.95); 
        createSketchObject(pillarGeo, 0x999999, 2.95, 1.25, -1.95); 
        createSketchObject(pillarGeo, 0x999999, -2.95, 1.25, 1.95); 
        createSketchObject(pillarGeo, 0x999999, 2.95, 1.25, 1.95); 

        const tex6m = createBannerTexture(6, 0.3);
        const tex4m = createBannerTexture(4, 0.3);
        const whiteMat = createFaceMaterial(0xffffff);
        const mat6m = [whiteMat, whiteMat, whiteMat, whiteMat, new THREE.MeshBasicMaterial({ map: tex6m }), new THREE.MeshBasicMaterial({ map: tex6m })];
        createSketchObject(new THREE.BoxGeometry(6, 0.3, 0.05), null, 0, 2.35, -1.95, 0, 0, 0, mat6m);
        const mat4m = [new THREE.MeshBasicMaterial({ map: tex4m }), new THREE.MeshBasicMaterial({ map: tex4m }), whiteMat, whiteMat, whiteMat, whiteMat];
        createSketchObject(new THREE.BoxGeometry(0.05, 0.3, 4), null, -2.95, 2.35, 0, 0, 0, 0, mat4m);

        // Backwall with WallBanner component rendered as texture
        const backwallGeo = new THREE.BoxGeometry(4.0, 1.6, 0.05);
        const backwall = createSketchObject(backwallGeo, 0xffffff, 0.9, 0.8, -1.9);

        // Create a container for rendering WallBanner
        const bannerContainer = document.createElement('div');
        bannerContainer.style.width = '1600px';
        bannerContainer.style.height = '640px';
        bannerContainer.style.position = 'fixed';
        bannerContainer.style.left = '-10000px'; // Off-screen but still rendered
        bannerContainer.style.top = '0';
        document.body.appendChild(bannerContainer);

        const root = ReactDOM.createRoot(bannerContainer);
        root.render(<WallBanner />);

        // Wait for fonts and images to load, then capture
        const captureAndApplyTexture = () => {
            // Wait for fonts
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    setTimeout(() => {
                        const element = bannerContainer.querySelector('div');
                        if (!element) {
                            console.error("WallBanner element not found");
                            return;
                        }

                        // Wait for images to load
                        const images = element.querySelectorAll('img');
                        const imagePromises = Array.from(images).map(img => {
                            if (img.complete) return Promise.resolve();
                            return new Promise((resolve) => {
                                img.onload = resolve;
                                img.onerror = resolve; // Resolve even on error
                            });
                        });

                        Promise.all(imagePromises).then(() => {
                            html2canvas(element, {
                                scale: 2,
                                useCORS: true,
                                allowTaint: true,
                                backgroundColor: '#ffffff',
                                logging: false
                            }).then(canvas => {
                                const texture = new THREE.CanvasTexture(canvas);
                                texture.needsUpdate = true;
                                backwall.mesh.material = new THREE.MeshBasicMaterial({
                                    map: texture,
                                    side: THREE.DoubleSide
                                });
                            }).catch(err => {
                                console.error("Error rendering WallBanner:", err);
                            });
                        });
                    }, 1000); // Increased delay for React 18
                });
            }
        };

        captureAndApplyTexture();

        // Stand Banner 1
        const standBannerGeo = new THREE.BoxGeometry(0.5, 1.5, 0.02);
        const standBanner1Obj = createSketchObject(standBannerGeo, 0xffffff, -2.5, 0.75, 1.5, -0.2, 0.5, 0);
        createSketchObject(new THREE.BoxGeometry(0.4, 0.05, 0.3), 0x333333, -2.5, 0.025, 1.6, 0, 0.5, 0);

        // Stand Banner 3
        const standBanner3Obj = createSketchObject(standBannerGeo, 0xffffff, 1.5, 0.75, 1.5, -0.2, -0.3, 0);
        createSketchObject(new THREE.BoxGeometry(0.4, 0.05, 0.3), 0x333333, 1.5, 0.025, 1.6, 0, -0.3, 0);

        // Create containers for StandBanner1
        const banner1Container = document.createElement('div');
        banner1Container.style.width = '500px';
        banner1Container.style.height = '1500px';
        banner1Container.style.position = 'fixed';
        banner1Container.style.left = '0';
        banner1Container.style.top = '0';
        banner1Container.style.opacity = '0';
        banner1Container.style.pointerEvents = 'none';
        banner1Container.style.zIndex = '-1';
        document.body.appendChild(banner1Container);

        const root1 = ReactDOM.createRoot(banner1Container);
        root1.render(<StandBanner1 />);

        // Create containers for StandBanner3
        const banner3Container = document.createElement('div');
        banner3Container.style.width = '500px';
        banner3Container.style.height = '1500px';
        banner3Container.style.position = 'fixed';
        banner3Container.style.left = '0';
        banner3Container.style.top = '1600px';
        banner3Container.style.opacity = '0';
        banner3Container.style.pointerEvents = 'none';
        banner3Container.style.zIndex = '-1';
        document.body.appendChild(banner3Container);

        const root3 = ReactDOM.createRoot(banner3Container);
        root3.render(<StandBanner3 />);

        // Capture and apply StandBanner1 texture
        const captureStandBanner1 = () => {
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    setTimeout(() => {
                        const element = banner1Container.querySelector('div');
                        if (!element) {
                            console.error("StandBanner1 element not found");
                            return;
                        }

                        const images = element.querySelectorAll('img');
                        const imagePromises = Array.from(images).map(img => {
                            if (img.complete) return Promise.resolve();
                            return new Promise((resolve) => {
                                img.onload = resolve;
                                img.onerror = resolve;
                            });
                        });

                        Promise.all(imagePromises).then(() => {
                            html2canvas(element, {
                                scale: 2,
                                useCORS: true,
                                allowTaint: true,
                                backgroundColor: '#6b7a87',
                                logging: false
                            }).then(canvas => {
                                const texture = new THREE.CanvasTexture(canvas);
                                texture.needsUpdate = true;
                                standBanner1Obj.mesh.material = new THREE.MeshBasicMaterial({
                                    map: texture,
                                    side: THREE.DoubleSide
                                });
                            }).catch(err => {
                                console.error("Error rendering StandBanner1:", err);
                            });
                        });
                    }, 1000);
                });
            }
        };

        // Capture and apply StandBanner3 texture
        const captureStandBanner3 = () => {
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    setTimeout(() => {
                        const element = banner3Container.querySelector('div');
                        if (!element) {
                            console.error("StandBanner3 element not found");
                            return;
                        }

                        const images = element.querySelectorAll('img');
                        const imagePromises = Array.from(images).map(img => {
                            if (img.complete) return Promise.resolve();
                            return new Promise((resolve) => {
                                img.onload = resolve;
                                img.onerror = resolve;
                            });
                        });

                        Promise.all(imagePromises).then(() => {
                            html2canvas(element, {
                                scale: 2,
                                useCORS: true,
                                allowTaint: true,
                                backgroundColor: '#4a9b8e',
                                logging: false
                            }).then(canvas => {
                                const texture = new THREE.CanvasTexture(canvas);
                                texture.needsUpdate = true;
                                standBanner3Obj.mesh.material = new THREE.MeshBasicMaterial({
                                    map: texture,
                                    side: THREE.DoubleSide
                                });
                            }).catch(err => {
                                console.error("Error rendering StandBanner3:", err);
                            });
                        });
                    }, 1000);
                });
            }
        };

        captureStandBanner1();
        captureStandBanner3();

        function createChair(x, y, z, rY) { /* chair creation logic */ }
        createSketchObject(new THREE.BoxGeometry(1.2, 0.75, 0.6), 0xffffff, -1.5, 0.375, -0.2); 
        createSketchObject(new THREE.BoxGeometry(0.6, 0.75, 1.2), 0xffffff, -0.6, 0.375, -1.1);
        
        // --- Animation Loop ---
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // --- Resize Handler ---
        const handleResize = () => {
            camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // === Cleanup logic for when component unmounts ===
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            // Clean up React root and container
            // Defer unmount to avoid race condition during React render
            setTimeout(() => {
                root.unmount();
                root1.unmount();
                root3.unmount();
            }, 0);
            if (bannerContainer.parentNode) {
                document.body.removeChild(bannerContainer);
            }
            if (banner1Container.parentNode) {
                document.body.removeChild(banner1Container);
            }
            if (banner3Container.parentNode) {
                document.body.removeChild(banner3Container);
            }
            // Dispose of geometries, materials, textures to free memory
            scene.traverse(object => {
                if (object.isMesh) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        // Check if it's an array of materials
                        if (Array.isArray(object.material)) {
                            object.material.forEach(material => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                    if (object.texture) object.texture.dispose(); // Custom property for texture
                }
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
