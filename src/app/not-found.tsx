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
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
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
        Return Home
      </Link>
    </div>
  );
}
