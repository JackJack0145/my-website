export default function Home() {
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
        <p>
          I have been developing mixed taggers, whist purple (Purple2good on oculus) is doing 
          the YT channel, and we-ive had some bugs in my code, its going well right now.
        </p>
      </div>
    </div>
  );
}
