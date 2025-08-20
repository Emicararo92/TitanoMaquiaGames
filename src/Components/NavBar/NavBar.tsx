"use client";

import { useState } from "react";
import Link from "next/link";
import { Gamepad2, Home, Users, Mail, Menu, X } from "lucide-react";
import styles from "../../Styles/NavBar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image src="/Icon.png" alt="Logo Empresa" width={30} height={30} />
      </div>

      {/* Desktop Links */}
      <div className={styles.links}>
        <Link href="#home" className={styles.link}>
          <Home size={18} /> Home
        </Link>
        <Link href="#INF" className={styles.link}>
          <Gamepad2 size={18} /> Infinity Pathways
        </Link>
        <Link href="#Nosotros" className={styles.link}>
          <Users size={18} /> Nosotros
        </Link>
        <Link href="#contact" className={styles.link}>
          <Mail size={18} /> Contacto
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className={styles.mobileButton} onClick={toggleMobileMenu}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="#home"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Home size={18} /> Home
          </Link>
          <Link
            href="#INF"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Gamepad2 size={18} /> Infinity Pathways
          </Link>
          <Link
            href="#Nosotros"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Users size={18} /> Nosotros
          </Link>
          <Link
            href="#contact"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            <Mail size={18} /> Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
