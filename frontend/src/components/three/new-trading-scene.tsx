"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function NewTradingScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create gradient background
    const gradientTexture = createGradientTexture();
    scene.background = gradientTexture;

    // Create particle system
    const particles = createParticles();
    scene.add(particles);

    // Create floating market data
    const marketData = createMarketData();
    scene.add(marketData);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Add point lights
    const pointLight1 = new THREE.PointLight(0x6366f1, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xec4899, 2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Position camera
    camera.position.z = 5;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    function animate() {
      requestAnimationFrame(animate);

      particles.rotation.y += 0.001;
      particles.rotation.x += 0.001;

      marketData.children.forEach((child: THREE.Object3D, i: number) => {
        child.position.y = Math.sin(Date.now() * 0.001 + i) * 0.1;
      });

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
}

function createGradientTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2;
  canvas.height = 2;

  const context = canvas.getContext("2d");
  if (!context) return null;

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#1a1a1a");
  gradient.addColorStop(1, "#000000");

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;

  return texture;
}

function createParticles() {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  const size = 2000;

  for (let i = 0; i < size; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  const material = new THREE.PointsMaterial({
    size: 0.01,
    color: 0x6366f1,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });

  return new THREE.Points(geometry, material);
}

function createMarketData() {
  const group = new THREE.Group();
  const material = new THREE.MeshPhongMaterial({
    color: 0x6366f1,
    emissive: 0x6366f1,
    emissiveIntensity: 0.5,
  });

  // Create floating bars representing market data
  for (let i = 0; i < 10; i++) {
    const height = Math.random() * 0.5 + 0.2;
    const geometry = new THREE.BoxGeometry(0.1, height, 0.1);
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = (i - 5) * 0.3;
    mesh.position.y = Math.random() * 2 - 1;
    mesh.position.z = Math.random() * 2 - 1;

    group.add(mesh);
  }

  return group;
}
