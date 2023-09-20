import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Страница не постоји!</h2>
      <p>Нисмо могли пронаћи страницу коју сте тражили.</p>
      <Link
        style={{
          backgroundColor: "#554122",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
          marginTop: "10px",
        }}
        href="/"
      >
        Вратите се на почетну страну
      </Link>
    </div>
  );
}
