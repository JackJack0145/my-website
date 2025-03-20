export default function Downloads() {
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
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Mixed Taggers Downloads</h1>
        <p>
          Welcome to the official downloads page for <strong>Mixed Taggers</strong>. Check out the links below to explore our game and it&apos;s development journey.
        </p>

        <div style={{ margin: "20px 0" }}>
          <h2>Game Source Code</h2>
          <p>Dive into the source code for the Mixed Taggers game and explore how it&apos;s built.</p>
          <a
            href="https://github.com/JackJack0145/Mixed-Taggers"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            View on GitHub
          </a>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h2>Website Source Code</h2>
          <p>Check out the code behind the official Mixed Taggers website.</p>
          <a
            href="https://github.com/JackJack0145/my-website"
            style={{ color: "#00bfff", textDecoration: "underline" }}
          >
            View on GitHub
          </a>
        </div>

        <div style={{ margin: "20px 0" }}>
          <h2>Meta Quest Store</h2>
          <p>
            The game will soon be available on the Meta Quest Store. Stay tuned for updates!
          </p>
          <span style={{ color: "#ffcc00", fontWeight: "bold" }}>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

