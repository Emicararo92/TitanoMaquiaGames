/* eslint-disable prefer-const */
// components/Hero/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../../Styles/Hero.module.css";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Partículas para el fondo
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];

    const particleColors = [
      "rgba(47, 128, 237, 0.6)",
      "rgba(255, 107, 53, 0.6)",
      "rgba(0, 255, 157, 0.4)",
      "rgba(255, 206, 103, 0.5)",
    ];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color:
          particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Animación de partículas
    const animate = () => {
      if (!ctx) return;

      // Limpiar con un fade sutil para crear estelas
      ctx.fillStyle = "rgba(10, 12, 28, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Rebotar en los bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Dibujar estela
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.speedX * 5, p.y - p.speedY * 5);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size / 2;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Efecto de escritura para el slogan
  useEffect(() => {
    if (!sloganRef.current) return;

    const sloganElement = sloganRef.current;
    const text = sloganElement.textContent;
    if (!text) return;

    sloganElement.textContent = "";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        sloganElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
      }
    };

    // Iniciar la animación después de un breve retraso
    setTimeout(typeWriter, 500);
  }, []);

  return (
    <section className={styles.hero} id="home">
      {/* Fondo animado con canvas */}
      <canvas ref={canvasRef} className={styles.canvasBg}></canvas>

      {/* Efectos de luz */}
      <div className={styles.lightEffect}></div>
      <div className={styles.lightEffect2}></div>

      {/* Contenido principal */}
      <div className={styles.heroContent}>
        {/* Logo con efecto especial */}
        <div className={styles.logoContainer}>
          <Image
            src="/Icon.png"
            alt="Game Studio Logo"
            width={180}
            height={180}
            className={styles.logoImage}
          />
          <div className={styles.logoGlow}></div>
        </div>

        {/* Slogan con efecto de escritura */}
        <div className={styles.sloganContainer}>
          <h1 className={styles.mainSlogan} ref={sloganRef}>
            Donde la imaginación se une a la innovación
          </h1>
          <p className={styles.subSlogan}>
            Creando experiencias de juego inolvidables
          </p>
        </div>

        {/* Llamada a la acción */}
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>
            <span>Infinite Patways</span>
            <div className={styles.buttonGlow}></div>
          </button>

          <button className={styles.secondaryButton}>
            <span>Nosotros</span>
          </button>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className={styles.decorativeElement}></div>
      <div className={styles.decorativeElement2}></div>

      {/* Flecha de scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
}
