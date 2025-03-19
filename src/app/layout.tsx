import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About Us
          </a>
          <a href="/downloads" style={{ color: "white", textDecoration: "none" }}>
            Downloads
          </a>
        </nav>
        {children}
      </body>
    </html>
  );
}
