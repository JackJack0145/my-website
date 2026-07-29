export default function DownloadsPage() {
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
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "800px",
          textAlign: "center",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1>Downloads</h1>
        <p>Here you&apos;ll find the latest resources and links:</p>

          <li style={{ margin: "10px 0", color: "#ddd" }}>
            Meta Quest Store: Coming Soon
          </li>
        </ul>
      </div>
    </div>
  );
}
