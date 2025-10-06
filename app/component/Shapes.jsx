"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function Shapes() {
  const scrollYRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center z-10">
      {/* Loading Indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-20">
          <div className="flex flex-col items-center space-y-3">
            <div className="h-10 w-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            <p className="text-sm text-gray-200 font-medium">
              Loading shapes...
            </p>
          </div>
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        shadows
        className="w-full h-full"
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
        onCreated={() => setIsLoaded(true)}
      >
        <Suspense fallback={null}>
          <Geometries scrollYRef={scrollYRef} />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries({ scrollYRef }) {
  const geometries = [
    {
      position: [1, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CylinderGeometry(0.8, 0.8, 2, 16),
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusKnotGeometry(1, 0.4, 64, 16),
    },
  ];

  const materials = [
    new THREE.MeshStandardMaterial({ color: 0x2ecc71, roughness: 0 }),
    new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x8e44ad, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x1abc9c, roughness: 0.1 }),
    new THREE.MeshStandardMaterial({ color: 0x2980b9, metalness: 0.5 }),
  ];

  return geometries.map(({ position, r, geometry }, i) => (
    <Geometry
      key={i}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materials={materials}
      r={r}
      scrollYRef={scrollYRef}
    />
  ));
}

function Geometry({ r, position, geometry, materials, scrollYRef }) {
  const groupRef = useRef();
  const [visible, setVisible] = useState(false);
  const originalPosition = useRef([...position]);
  const startingMaterial = gsap.utils.random(materials);

  useFrame(() => {
    if (groupRef.current) {
      const scroll = scrollYRef.current;
      groupRef.current.position.x =
        originalPosition.current[0] + Math.sin(scroll * Math.PI * 2) * r * 5;
      groupRef.current.position.y =
        originalPosition.current[1] + Math.cos(scroll * Math.PI * 2) * r * 3;
      groupRef.current.rotation.z = scroll * Math.PI * 4;
    }
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(groupRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef} position={position}>
      <Float speed={4 * r} rotationIntensity={5 * r} floatIntensity={3 * r}>
        <mesh
          geometry={geometry}
          visible={visible}
          material={startingMaterial}
          onClick={(e) => {
            const mesh = e.object;
            gsap.to(mesh.rotation, {
              x: `+=${gsap.utils.random(0, 2)}`,
              y: `+=${gsap.utils.random(0, 2)}`,
              duration: 1.3,
              ease: "elastic.out(1,0.3)",
            });
          }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "default")}
        />
      </Float>
    </group>
  );
}
