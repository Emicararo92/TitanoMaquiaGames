/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Gamepad2, Home, Users, Mail, Menu, X, Sparkles } from "lucide-react";
import styles from "../../Styles/NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      "rgba(47, 128, 237, 0.5)",
      "rgba(255, 107, 53, 0.5)",
      "rgba(0, 255, 157, 0.3)",
    ];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color:
          particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }

    // Animación de partículas
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fondo con gradiente sutil
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, "rgba(15, 15, 35, 0.95)");
      gradient.addColorStop(1, "rgba(25, 25, 50, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Actualizar y dibujar partículas
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        // Rebotar en los bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        {/* Fondo animado con canvas */}
        <canvas ref={canvasRef} className={styles.canvasBg}></canvas>

        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/Icon.png"
                alt="Logo Empresa"
                width={40}
                height={40}
                className={styles.logoImage}
              />
              <div className={styles.logoGlow}></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.links}>
            <Link href="#home" className={styles.link}>
              <Home size={18} className={styles.linkIcon} />
              <span>Home</span>
              <div className={styles.linkHoverEffect}></div>
            </Link>
            <Link href="#INF" className={styles.link}>
              <Gamepad2 size={18} className={styles.linkIcon} />
              <span>Infinity Pathways</span>
              <div className={styles.linkHoverEffect}></div>
            </Link>
            <Link href="#Nosotros" className={styles.link}>
              <Users size={18} className={styles.linkIcon} />
              <span>Nosotros</span>
              <div className={styles.linkHoverEffect}></div>
            </Link>
            <Link href="#contact" className={styles.link}>
              <Mail size={18} className={styles.linkIcon} />
              <span>Contacto</span>
              <div className={styles.linkHoverEffect}></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburger}>
              <span
                className={`${styles.hamburgerLine} ${
                  mobileOpen ? styles.active : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  mobileOpen ? styles.active : ""
                }`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${
                  mobileOpen ? styles.active : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
        >
          <div className={styles.mobileMenuBg}></div>
          <div className={styles.mobileMenuContent}>
            <Link
              href="#home"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <Home size={20} />
              <span>Home</span>
              <div className={styles.mobileLinkBg}></div>
            </Link>
            <Link
              href="#INF"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <Gamepad2 size={20} />
              <span>Infinity Pathways</span>
              <div className={styles.mobileLinkBg}></div>
            </Link>
            <Link
              href="#Nosotros"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <Users size={20} />
              <span>Nosotros</span>
              <div className={styles.mobileLinkBg}></div>
            </Link>
            <Link
              href="#contact"
              className={styles.mobileLink}
              onClick={closeMobileMenu}
            >
              <Mail size={20} />
              <span>Contacto</span>
              <div className={styles.mobileLinkBg}></div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
