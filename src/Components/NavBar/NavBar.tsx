/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, Home, Users, Mail, Menu, X, Sparkles } from "lucide-react";
import styles from "../../Styles/NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
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
