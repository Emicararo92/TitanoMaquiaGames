import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/NavBar/NavBar";
import Footer from "@/Components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titano Maquia Games",
  description: "Desarrolladora de video juegos",
};

// Componente de fondo fijo que podemos definir aquí mismo
function FixedBackground() {
  return (
    <>
      <div
        className="fixedBackground"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundImage:
            "url(https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755020843/Banner_Web_sf634d.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 1,
        }}
      />
      <div
        className="backgroundOverlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background:
            "linear-gradient(135deg, rgba(10, 12, 28, 0.85) 0%, rgba(18, 22, 45, 0.8) 100%)",
          zIndex: 2,
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          position: "relative",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Fondo fijo que se aplica a toda la página */}
        <FixedBackground />

        {/* Contenido principal con z-index superior */}
        <div style={{ position: "relative", zIndex: 3 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
