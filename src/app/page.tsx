import Image from "next/image";

function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5e0a6", // opcional, acorde a la imagen
      }}
    >
      <Image
        src="/mantenimiento.png"
        alt="Sitio en mantenimiento"
        width={1200}
        height={1200}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

export default Page;
