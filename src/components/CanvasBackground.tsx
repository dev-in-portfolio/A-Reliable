"use client"

import { useEffect, useRef } from "react"

interface CanvasBackgroundProps {
  type: "solarstorm" | "lattice" | "blackhole"
  opacity?: number
}

export default function CanvasBackground({ type, opacity = 0.25 }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let W = 0
    let H = 0
    let animationFrameId: number

    function resize() {
      if (canvas && canvas.parentElement) {
        W = canvas.width = canvas.parentElement.clientWidth
        H = canvas.height = canvas.parentElement.clientHeight
      }
    }
    resize()

    // Setup resize observer instead of window resize to handle local dimensions correctly
    const resizeObserver = new ResizeObserver(() => {
      resize()
    })
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    // Solar Storm logic
    let solarStormParticles: any[] = []
    let solarStormTime = 0
    if (type === "solarstorm") {
      const cx = W / 2
      const cy = H / 2
      const LOOPS = 6

      for (let l = 0; l < LOOPS; l++) {
        const baseAngle = (l / LOOPS) * Math.PI * 2
        const count = 60
        for (let i = 0; i < count; i++) {
          const t = i / count
          const angle = baseAngle + t * 0.8 - 0.4
          const speed = 1.2 + t * 2.5
          solarStormParticles.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed * 0.6,
            size: 1.5 + t * 3,
            hue: 35 + t * 25 + Math.random() * 8, // brand warm golden tones
            alpha: 0.8 - t * 0.5,
            life: 1,
            decay: 0.002 + t * 0.004,
            phase: Math.random() * Math.PI * 2,
            trail: [],
          })
        }
      }

      for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2
        const r = Math.random() * 150
        solarStormParticles.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: 1 + Math.random() * 1.5,
          hue: 45 + Math.random() * 20, // brand gold
          alpha: 0.1 + Math.random() * 0.2,
          life: 1,
          decay: 0.001,
          phase: Math.random() * Math.PI * 2,
          trail: [],
        })
      }
    }

    // Lattice logic
    let latticePoints: any[] = []
    let latticeTime = 0
    if (type === "lattice") {
      const SPACING = 30
      const SIZE = 4 // Keep lattice bounds compact
      for (let x = -SIZE; x <= SIZE; x++) {
        for (let y = -SIZE; y <= SIZE; y++) {
          for (let z = -SIZE; z <= SIZE; z++) {
            latticePoints.push({
              x: x * SPACING,
              y: y * SPACING,
              z: z * SPACING,
              baseX: x * SPACING,
              baseY: y * SPACING,
              baseZ: z * SPACING,
              hue: 200 + (x / SIZE) * 30 + (z / SIZE) * 30, // cool cyan/blue
              phase: Math.random() * Math.PI * 2,
            })
          }
        }
      }
    }

    // Black Hole logic
    let blackHoleParticles: any[] = []
    let blackHoleTime = 0
    if (type === "blackhole") {
      const COUNT = 350
      const cx = W / 2
      const cy = H / 2
      for (let i = 0; i < COUNT; i++) {
        const angle = Math.random() * Math.PI * 2
        const r = 20 + Math.random() * 250
        const orbitSpeed = 150 / (r + 40)
        blackHoleParticles.push({
          x: cx + Math.cos(angle) * r,
          y: cy + Math.sin(angle) * r,
          angle,
          radius: r,
          baseRadius: r,
          orbitSpeed: 0.004 + orbitSpeed * 0.02,
          hue: 35 + Math.random() * 200, // blend brand amber/gold with space purple
          size: 1 + Math.random() * 2,
          phase: Math.random() * Math.PI * 2,
          falling: Math.random() > 0.6,
        })
      }
    }

    // Animation Loop
    function render() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)

      if (type === "solarstorm") {
        solarStormTime += 0.003
        const pulse = Math.sin(solarStormTime * 0.5) * 0.5 + 0.5
        const cx = W / 2
        const cy = H / 2

        ctx.fillStyle = "rgba(11, 18, 31, 0.015)" // matching brand backdrop opacity
        ctx.fillRect(0, 0, W, H)

        const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40 + pulse * 15)
        sunGrad.addColorStop(0, `hsla(45, 100%, 75%, ${0.06 + pulse * 0.04})`)
        sunGrad.addColorStop(0.5, `hsla(35, 100%, 55%, 0.02)`)
        sunGrad.addColorStop(1, "transparent")
        ctx.fillStyle = sunGrad
        ctx.beginPath()
        ctx.arc(cx, cy, 40 + pulse * 15, 0, Math.PI * 2)
        ctx.fill()

        for (let i = solarStormParticles.length - 1; i >= 0; i--) {
          const p = solarStormParticles[i]
          p.x += p.vx
          p.y += p.vy
          p.life -= p.decay
          p.trail.push({ x: p.x, y: p.y })
          if (p.trail.length > 6) p.trail.shift()

          if (p.life <= 0 || p.x < 0 || p.x > W || p.y < 0 || p.y > H) {
            p.x = cx
            p.y = cy
            p.life = 1
            p.trail = []
          }

          if (p.trail.length > 1) {
            ctx.beginPath()
            ctx.moveTo(p.trail[0].x, p.trail[0].y)
            for (let j = 1; j < p.trail.length; j++) {
              ctx.lineTo(p.trail[j].x, p.trail[j].y)
            }
            ctx.strokeStyle = `hsla(${p.hue}, 90%, 60%, ${p.alpha * p.life})`
            ctx.lineWidth = p.size
            ctx.lineCap = "round"
            ctx.stroke()
          }
        }
      } else if (type === "lattice") {
        latticeTime += 0.003
        const cx = W / 2
        const cy = H / 2
        const rotX = latticeTime * 0.15
        const rotY = latticeTime * 0.2

        ctx.fillStyle = "rgba(11, 18, 31, 0.03)"
        ctx.fillRect(0, 0, W, H)

        const sorted = latticePoints.map((p) => {
          let x = p.baseX
          let y = p.baseY
          let z = p.baseZ

          const ry = y * Math.cos(rotX) - z * Math.sin(rotX)
          const rz = y * Math.sin(rotX) + z * Math.cos(rotX)
          y = ry
          z = rz

          const rx = x * Math.cos(rotY) + z * Math.sin(rotY)
          z = -x * Math.sin(rotY) + z * Math.cos(rotY)
          x = rx

          x += Math.sin(latticeTime + p.phase + p.baseZ * 0.05) * 2.5
          y += Math.cos(latticeTime * 0.7 + p.phase + p.baseX * 0.05) * 2.5

          const perspective = 250 / (250 + z)
          const sx = cx + x * perspective
          const sy = cy + y * perspective

          return { sx, sy, z, perspective, hue: p.hue, phase: p.phase }
        })

        sorted.sort((a, b) => a.z - b.z)

        for (const p of sorted) {
          if (p.z < -240 || p.z > 240) continue
          const alpha = 0.15 + (p.z / 250) * 0.2 + 0.2
          const size = 1.5 * p.perspective
          const hue = p.hue + Math.sin(latticeTime + p.phase) * 10

          ctx.beginPath()
          ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${hue}, 80%, ${45 + p.perspective * 25}%, ${alpha})`
          ctx.fill()
        }
      } else if (type === "blackhole") {
        blackHoleTime += 0.003
        const cx = W / 2
        const cy = H / 2

        ctx.fillStyle = "rgba(11, 18, 31, 0.02)"
        ctx.fillRect(0, 0, W, H)

        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30)
        coreGrad.addColorStop(0, "rgba(0, 0, 0, 1)")
        coreGrad.addColorStop(0.5, "rgba(20, 10, 40, 0.4)")
        coreGrad.addColorStop(1, "transparent")
        ctx.fillStyle = coreGrad
        ctx.beginPath()
        ctx.arc(cx, cy, 30, 0, Math.PI * 2)
        ctx.fill()

        const accretionGrad = ctx.createRadialGradient(cx, cy, 25, cx, cy, 60)
        accretionGrad.addColorStop(0, "hsla(35, 100%, 60%, 0.04)")
        accretionGrad.addColorStop(0.5, "hsla(270, 70%, 40%, 0.01)")
        accretionGrad.addColorStop(1, "transparent")
        ctx.fillStyle = accretionGrad
        ctx.beginPath()
        ctx.arc(cx, cy, 60, 0, Math.PI * 2)
        ctx.fill()

        for (const p of blackHoleParticles) {
          p.angle += p.orbitSpeed

          if (p.falling && p.radius > 15) {
            p.radius -= 0.1 + (1 - p.radius / p.baseRadius) * 0.25
            p.orbitSpeed += 0.00008
          }

          if (p.radius <= 15) {
            p.radius = p.baseRadius
            p.orbitSpeed = 0.004 + (150 / (p.baseRadius + 40)) * 0.02
          }

          const wobble = Math.sin(blackHoleTime + p.phase + p.angle) * 1.5
          const r = p.radius + wobble
          const x = cx + Math.cos(p.angle) * r
          const y = cy + Math.sin(p.angle) * r

          const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
          const brightness = Math.max(0, 1 - dist / 250)
          const alpha = 0.08 + brightness * 0.35
          const hue = p.hue + brightness * 25

          ctx.beginPath()
          ctx.arc(x, y, p.size * (0.3 + brightness * 0.7), 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${hue}, 85%, ${45 + brightness * 35}%, ${alpha})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
    }
  }, [type])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ opacity, mixBlendMode: "screen" }}
    />
  )
}
