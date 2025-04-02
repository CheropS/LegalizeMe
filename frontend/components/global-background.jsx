"use client"

import { useEffect, useRef } from "react"

export default function GlobalBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Legal icons as simple SVG paths
    const icons = [
      {
        path: "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z",
        size: 24,
      },
      {
        path: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
        size: 20,
      },
      {
        path: "M3 19h18a1 1 0 0 0 .993-.883L22 18a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1 1 1 0 0 0 1 1zm3-6h12a1 1 0 0 0 .993-.883L19 12a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1 1 1 0 0 0 1 1zm-2-6h16a1 1 0 0 0 .993-.883L21 6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 1 1 0 0 0 1 1z",
        size: 22,
      },
      {
        path: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
        size: 18,
      },
      {
        path: "M20 7h-7m-7 4h14m-14 4h14m-14 4h14",
        size: 20,
      },
    ]

    // Create particles
    const particles = []

    const particleCount = Math.min(30, Math.floor(window.innerWidth / 50))

    for (let i = 0; i < particleCount; i++) {
      const icon = icons[Math.floor(Math.random() * icons.length)]
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: icon.size * (0.8 + Math.random() * 0.6),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        icon,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Boundary check
        if (particle.x < -50) particle.x = canvas.width + 50
        if (particle.x > canvas.width + 50) particle.x = -50
        if (particle.y < -50) particle.y = canvas.height + 50
        if (particle.y > canvas.height + 50) particle.y = -50

        // Draw icon
        ctx.save()
        ctx.translate(particle.x, particle.y)
        ctx.rotate(particle.rotation)
        ctx.globalAlpha = 0.2
        ctx.strokeStyle = "#e0e0e0"
        ctx.lineWidth = 1.5

        // Draw a simple shape instead of SVG
        const size = particle.size

        // Draw a simple shape based on the index
        if (particle.icon.path.includes("12a3")) {
          // Circle
          ctx.beginPath()
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
          ctx.stroke()
        } else if (particle.icon.path.includes("14 2H6")) {
          // Document
          ctx.beginPath()
          ctx.rect(-size / 2, -size / 2, size, size * 1.2)
          ctx.moveTo(-size / 2 + size * 0.6, -size / 2)
          ctx.lineTo(-size / 2 + size * 0.6, -size / 2 + size * 0.3)
          ctx.lineTo(-size / 2 + size, -size / 2 + size * 0.3)
          ctx.stroke()
        } else if (particle.icon.path.includes("20 7h-7")) {
          // Lines
          ctx.beginPath()
          ctx.moveTo(-size / 2, -size / 4)
          ctx.lineTo(size / 2, -size / 4)
          ctx.moveTo(-size / 2, 0)
          ctx.lineTo(size / 2, 0)
          ctx.moveTo(-size / 2, size / 4)
          ctx.lineTo(size / 2, size / 4)
          ctx.stroke()
        } else if (particle.icon.path.includes("3 19h18")) {
          // Scale
          ctx.beginPath()
          ctx.moveTo(-size / 2, size / 4)
          ctx.lineTo(size / 2, size / 4)
          ctx.moveTo(0, size / 4)
          ctx.lineTo(0, -size / 4)
          ctx.arc(-size / 3, -size / 4, size / 6, 0, Math.PI * 2)
          ctx.arc(size / 3, -size / 4, size / 6, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          // Gavel
          ctx.beginPath()
          ctx.moveTo(-size / 2, -size / 3)
          ctx.lineTo(0, 0)
          ctx.lineTo(size / 2, -size / 3)
          ctx.moveTo(0, 0)
          ctx.lineTo(0, size / 2)
          ctx.stroke()
        }

        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <>
      {/* Background canvas for animated legal icons */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
      
      {/* Decorative glowing elements */}
      <div className="fixed bottom-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10"></div>
      <div className="fixed top-40 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-1/3 left-1/4 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-1/4 right-1/3 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl -z-10"></div>
    </>
  )
} 