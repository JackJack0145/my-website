import React from "react";

const About: React.FC = () => {
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
          textAlign: "center", // Center text
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1>About Me</h1>
        <p>
          I’m Jack, a passionate game developer focusing on crafting immersive
          VR and PC experiences. Working with Purple on <i>Mixed Taggers</i> has
          been an incredible journey, and we’re excited to share our progress with the world.
        </p>
        <p>
          My expertise lies in Unity development, level systems, and optimizing
          hardware to push the boundaries of interactive gaming. Let’s make
          something unforgettable!
        </p>
        <h2>My GitHub Projects</h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginTop: "20px",
          }}
        >
          <li style={{ marginBottom: "10px" }}>
            <a
              href="https://github.com/JackJack0145/my-website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00caff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              My Website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/JackJack0145/Mixed-Taggers"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#00caff",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Mixed Taggers
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
