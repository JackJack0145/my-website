import React from "react";

const Downloads: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="text-container"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "800px",
          textAlign: "center",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1>Downloads</h1>
        <p>
          Here you'll find the latest resources and links:
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "10px 0" }}>
            <a
              href="https://github.com/JackJack0145/my-website"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61dafb", textDecoration: "none", fontWeight: "bold" }}
            >
              GitHub 1: My Website Repository
            </a>
          </li>
          <li style={{ margin: "10px 0" }}>
            <a
              href="https://github.com/JackJack0145/Mixed-Taggers"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#61dafb", textDecoration: "none", fontWeight: "bold" }}
            >
              GitHub 2: Mixed Taggers (Unity Project)
            </a>
          </li>
          <li style={{ margin: "10px 0", color: "#ddd" }}>
            Meta Quest Store: Coming Soon
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Downloads;

