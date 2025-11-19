// src/ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

        // Backwall with exported texture
        const backwallGeo = new THREE.BoxGeometry(4.0, 1.6, 0.05);
        const backwall = createSketchObject(backwallGeo, 0xffffff, 0.9, 0.8, -1.9);
        const backwallTexture = new THREE.TextureLoader().load(
            '/wall_banner_exported.png', // Corrected path for Vite's public directory
            undefined, // onLoad
            undefined, // onProgress
            () => { // onError
                console.log("Could not load texture, using placeholder.");
                backwall.mesh.material = new THREE.MeshBasicMaterial({ map: createTextTexture("Error: Load wall_banner_exported.png") });
            }
        );
        backwall.mesh.material = new THREE.MeshBasicMaterial({ map: backwallTexture, side: THREE.DoubleSide });

        // Other booth elements...
        const standBannerGeo = new THREE.BoxGeometry(0.5, 1.5, 0.02);
        createSketchObject(standBannerGeo, 0xffffff, -2.5, 0.75, 1.5, -0.2, 0.5, 0).mesh.material = new THREE.MeshBasicMaterial({ map: createTextTexture("X-배너 1") });
        createSketchObject(new THREE.BoxGeometry(0.4, 0.05, 0.3), 0x333333, -2.5, 0.025, 1.6, 0, 0.5, 0);
        createSketchObject(standBannerGeo, 0xffffff, 1.5, 0.75, 1.5, -0.2, -0.3, 0).mesh.material = new THREE.MeshBasicMaterial({ map: createTextTexture("X-배너 2") });
        createSketchObject(new THREE.BoxGeometry(0.4, 0.05, 0.3), 0x333333, 1.5, 0.025, 1.6, 0, -0.3, 0);

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
