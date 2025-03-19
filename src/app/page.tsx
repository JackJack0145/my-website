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
          Purple and I have been quietly crafting something extraordinary with
          our VR game, <strong>Mixed Taggers</strong>. While I take care of the
          technical side—designing immersive levels, fine-tuning mechanics, and
          optimizing performance—Purple focuses on building our online
          presence. Together, we even designed this very website to showcase
          our project and give you a glimpse into our journey. Using his online
          nickname, Purple manages our Discord server and YouTube channel,
          sharing sneak peeks and connecting with potential players. So far,
          only a few close friends know about our ambitious project, but we
          dream big. One day, we hope all this hard work will make us famous
          and successful. With my passion for creating games and Purple’s
          skills in community building, we’re determined to make <strong>Mixed
          Taggers</strong> an unforgettable experience.
        </p>
      </div>
    </div>
  );
}
