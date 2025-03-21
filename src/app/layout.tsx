import "./globals.css";
import Link from "next/link"; // Import Link from Next.js
import { Analytics } from "@vercel/analytics/react"
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
          {/* Use Link instead of <a> for internal navigation */}
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
          <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
            About Us
          </Link>
          <Link
            href="/downloads"
            style={{ color: "white", textDecoration: "none" }}
          >
            Downloads
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
