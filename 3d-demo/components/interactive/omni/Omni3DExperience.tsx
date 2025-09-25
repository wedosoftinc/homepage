'use client'

import React, { useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

type Channel = {
  id: string
  name: string
  color: string
  position: [number, number, number]
  emoji: string
}

function makeCurve(start: THREE.Vector3, end: THREE.Vector3) {
  const mid = start.clone().add(end).multiplyScalar(0.5)
  const up = new THREE.Vector3(0, 2.5, 0)
  const control = mid.add(up)
  return new THREE.QuadraticBezierCurve3(start, control, end)
}

function FlowPath({
  curve,
  color,
  opacity = 0.3,
}: {
  curve: THREE.QuadraticBezierCurve3
  color: string
  opacity?: number
}) {
  const geometry = useMemo(() => new THREE.TubeGeometry(curve, 64, 0.05, 8, false), [curve])
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} transparent opacity={opacity} />
    </mesh>
  )
}

function Particle({
  curve,
  color,
  speed = 0.2,
  size = 0.08,
  offset = 0,
}: {
  curve: THREE.QuadraticBezierCurve3
  color: string
  speed?: number
  size?: number
  offset?: number
}) {
  const ref = useRef<THREE.Mesh>(null!)
  const tRef = useRef(Math.random() * 1)
  useFrame((_, delta) => {
    tRef.current += delta * speed
    const t = (tRef.current + offset) % 1
    const p = curve.getPoint(t)
    ref.current.position.set(p.x, p.y, p.z)
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial emissive={new THREE.Color(color)} color={color} emissiveIntensity={1.5} />
    </mesh>
  )
}

function ChannelNode({
  channel,
  active,
  onToggle,
}: {
  channel: Channel
  active: boolean
  onToggle: (id: string) => void
}) {
  const [hovered, setHovered] = useState(false)
  const color = active ? channel.color : '#4b5563'
  const emissive = new THREE.Color(active ? channel.color : '#1f2937')

  return (
    <group position={channel.position}>
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onToggle(channel.id)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={1.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.001, 0]} scale={hovered ? 1.4 : 1.2}>
        <torusGeometry args={[0.8, 0.02, 8, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <Html center distanceFactor={8}>
        <div
          style={{
            background: 'rgba(17, 24, 39, 0.6)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: 8,
            fontSize: 12,
            whiteSpace: 'nowrap',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {channel.emoji} {channel.name}
        </div>
      </Html>
    </group>
  )
}

function CenterHub({ activeCount }: { activeCount: number }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.2
  })
  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0ea5e9" emissiveIntensity={1.4} metalness={0.5} roughness={0.25} />
      </mesh>
      <mesh scale={1 + Math.min(activeCount / 8, 0.6)}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.25} />
      </mesh>
      <Html center distanceFactor={8} position={[0, -1.8, 0]}>
        <div
          style={{
            background: 'rgba(8, 47, 73, 0.6)',
            color: 'white',
            padding: '6px 10px',
            borderRadius: 8,
            fontSize: 12,
            whiteSpace: 'nowrap',
            border: '1px solid rgba(56,189,248,0.35)',
            backdropFilter: 'blur(4px)',
          }}
        >
          Agent Hub (Central Inbox)
        </div>
      </Html>
    </group>
  )
}

function Scene() {
  const radius = 6
  const channels: Channel[] = useMemo(() => {
    const list = [
      { id: 'email', name: 'Email', color: '#60a5fa', emoji: '✉️' },
      { id: 'chat', name: 'Live Chat', color: '#22c55e', emoji: '💬' },
      { id: 'phone', name: 'Call', color: '#f59e0b', emoji: '📞' },
      { id: 'whatsapp', name: 'WhatsApp', color: '#25D366', emoji: '🟢' },
      { id: 'instagram', name: 'Instagram', color: '#e1306c', emoji: '📸' },
      { id: 'facebook', name: 'Messenger', color: '#1877F2', emoji: '📘' },
      { id: 'kakao', name: 'KakaoTalk', color: '#FEE500', emoji: '🗨️' },
      { id: 'sms', name: 'SMS', color: '#a78bfa', emoji: '📱' },
    ]
    return list.map((c, i) => {
      const angle = (i / list.length) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius
      const y = Math.sin(angle * 2) * 0.4
      return { ...c, position: [x, y, z] as [number, number, number] }
    })
  }, [])

  const [activeIds, setActiveIds] = useState<string[]>(channels.map((c) => c.id))
  const toggle = (id: string) =>
    setActiveIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const center = useMemo(() => new THREE.Vector3(0, 0, 0), [])
  const curves = useMemo(() => {
    const map: Record<string, THREE.QuadraticBezierCurve3> = {}
    channels.forEach((ch) => {
      const start = new THREE.Vector3(...ch.position)
      map[ch.id] = makeCurve(start, center)
    })
    return map
  }, [channels, center])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <pointLight position={[-6, -3, -4]} intensity={0.6} color="#38bdf8" />
      <gridHelper args={[30, 30, '#1f2937', '#111827']} position={[0, -2.2, 0]} />

      <CenterHub activeCount={activeIds.length} />
      {channels.map((ch) => (
        <ChannelNode key={ch.id} channel={ch} active={activeIds.includes(ch.id)} onToggle={toggle} />
      ))}

      {channels.map((ch) => {
        const active = activeIds.includes(ch.id)
        const curve = curves[ch.id]
        return (
          <group key={`flow-${ch.id}`}>
            <FlowPath curve={curve} color={ch.color} opacity={active ? 0.35 : 0.08} />
            {Array.from({ length: active ? 14 : 4 }).map((_, i) => (
              <Particle key={i} curve={curve} color={ch.color} speed={active ? 0.35 : 0.15} size={active ? 0.09 : 0.06} offset={i / 14} />
            ))}
          </group>
        )
      })}

      <OrbitControls enablePan={false} minDistance={6} maxDistance={18} />
      <Html transform={false} fullscreen style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0 flex flex-col justify-between p-3 md:p-4 lg:p-6">
          <div className="pointer-events-auto max-w-xl rounded-lg border bg-black/50 text-white backdrop-blur-md px-4 py-3">
            <div className="text-sm md:text-base font-semibold">다채널 → 중앙 인박스 → 효율적 상담</div>
            <div className="mt-1 text-xs md:text-sm text-gray-200">
              여러 채널(Email, Chat, 전화, 소셜)로 들어오는 문의가 Freddy AI와 규칙에 의해 자동 분류·우선순위 지정되어 에이전트 허브로 라우팅됩니다.
            </div>
          </div>

          <div className="pointer-events-auto flex flex-col md:flex-row gap-2 md:items-center">
            <div className="rounded-lg border bg-black/50 text-white backdrop-blur-md px-3 py-2">
              <span className="text-xs md:text-sm opacity-80">채널 토글:</span>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {channels.map((ch) => {
                  const active = activeIds.includes(ch.id)
                  return (
                    <button
                      key={`toggle-${ch.id}`}
                      onClick={() => toggle(ch.id)}
                      style={{
                        background: active ? ch.color : 'rgba(31,41,55,0.7)',
                        color: active ? 'black' : 'white',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                      className="text-xs md:text-sm rounded-md px-2.5 py-1.5"
                    >
                      {ch.emoji} {ch.name}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="rounded-lg border bg-black/50 text-white backdrop-blur-md px-3 py-2 md:ml-auto">
              <div className="text-xs md:text-sm">
                활성 채널: <b>{activeIds.length}</b> / {channels.length}
              </div>
            </div>
          </div>
        </div>
      </Html>
    </>
  )
}

export default function Omni3DExperience() {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-lg overflow-hidden">
      <Canvas camera={{ position: [8, 6, 10], fov: 45, near: 0.1, far: 100 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <color attach="background" args={['#0b1220']} />
        <Scene />
      </Canvas>
    </div>
  )
}