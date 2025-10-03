/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Home, Users, Mail, Menu, X, Sparkles } from "lucide-react";
import styles from "../../Styles/NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Para detectar en qué página estamos

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

  // Función para scroll suave a una sección
  const scrollToSection = (sectionId: string) => {
    console.log("Buscando elemento con ID:", sectionId);
    const element = document.getElementById(sectionId);
    console.log("Elemento encontrado:", element);

    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      console.log("Haciendo scroll a:", offsetTop);
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log("❌ Elemento NO encontrado con ID:", sectionId);
    }
    closeMobileMenu();
  };

  // Manejar clicks en los links
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  // Manejar click en el logo
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si estamos en una página de noticias (/news/[id]), navegar a home
    if (pathname?.startsWith("/news/")) {
      e.preventDefault();
      window.location.href = "/"; // Navegación completa a home
      closeMobileMenu();
    } else {
      // Si estamos en home, hacer scroll al top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      closeMobileMenu();
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link
              href="/"
              onClick={handleLogoClick}
              className={styles.logoLink}
            >
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
            <a
              href="#home"
              className={styles.link}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              <Home size={18} className={styles.linkIcon} />
              <span>Home</span>
              <div className={styles.linkHoverEffect}></div>
            </a>
            <a
              href="#INF"
              className={styles.link}
              onClick={(e) => handleLinkClick(e, "INF")}
            >
              <Gamepad2 size={18} className={styles.linkIcon} />
              <span>Infinity Pathways</span>
              <div className={styles.linkHoverEffect}></div>
            </a>
            <a
              href="#NOS"
              className={styles.link}
              onClick={(e) => handleLinkClick(e, "NOS")}
            >
              <Users size={18} className={styles.linkIcon} />
              <span>Nosotros</span>
              <div className={styles.linkHoverEffect}></div>
            </a>
            <a
              href="#contact"
              className={styles.link}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              <Mail size={18} className={styles.linkIcon} />
              <span>Contacto</span>
              <div className={styles.linkHoverEffect}></div>
            </a>
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
            <a
              href="#home"
              className={styles.mobileLink}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              <Home size={20} />
              <span>Home</span>
              <div className={styles.mobileLinkBg}></div>
            </a>
            <a
              href="#INF"
              className={styles.mobileLink}
              onClick={(e) => handleLinkClick(e, "INF")}
            >
              <Gamepad2 size={20} />
              <span>Infinity Pathways</span>
              <div className={styles.mobileLinkBg}></div>
            </a>
            <a
              href="#NOS"
              className={styles.mobileLink}
              onClick={(e) => handleLinkClick(e, "NOS")}
            >
              <Users size={20} />
              <span>Nosotros</span>
              <div className={styles.mobileLinkBg}></div>
            </a>
            <a
              href="#contact"
              className={styles.mobileLink}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              <Mail size={20} />
              <span>Contacto</span>
              <div className={styles.mobileLinkBg}></div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
