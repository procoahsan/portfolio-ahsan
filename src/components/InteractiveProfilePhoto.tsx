import { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Circle } from '@react-three/drei'
import { Group, Mesh, DoubleSide, FrontSide, VideoTexture } from 'three'
import profileImage from "@/assets/profile.png"
import backVideo from "@/assets/backVideo.mp4" // Replace with the actual path to your muted video file

function ProfileCoin() {
  const groupRef = useRef<Group>(null!)
  const frontTexture = useTexture(profileImage)
  const video = useMemo(() => {
    const vid = document.createElement('video')
    vid.src = backVideo
    vid.crossOrigin = 'anonymous'
    vid.loop = true
    vid.muted = true
    vid.playsInline = true
    return vid
  }, [])
  
  useEffect(() => {
    video.play()
  }, [video])
  
  const backTexture = useMemo(() => new VideoTexture(video), [video])
  
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (groupRef.current && !hovered) {
      groupRef.current.rotation.y += 0.005 // Slower, smoother spin to show both sides
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 // Gentle tilt
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1}
    >
      {/* Front side */}
      <Circle args={[1, 64]}>
        <meshStandardMaterial 
          map={frontTexture} 
          roughness={0.3}
          metalness={0.1}
          side={FrontSide}
          transparent={true}
          opacity={0.98}
        />
      </Circle>
      
      {/* Back side - rotated 180 degrees to face the opposite direction */}
      <Circle args={[1, 64]} rotation={[0, Math.PI, 0]}>
        <meshStandardMaterial 
          map={backTexture} 
          roughness={0.3}
          metalness={0.1}
          side={FrontSide}
          transparent={true}
          opacity={0.98}
        />
      </Circle>
    </group>
  )
}

const InteractiveProfilePhoto = () => {
  return (
    <div className="w-80 h-80 md:w-96 md:h-96 mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        className="rounded-full border-4 border-primary/20 shadow-2xl"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <ProfileCoin />
        </Suspense>
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-70">
        Drag to interact
      </div>
    </div>
  )
}

export default InteractiveProfilePhoto