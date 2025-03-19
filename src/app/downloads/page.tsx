interface DownloadItem {
    name: string;
    link: string;
  }
  
  const Downloads: React.FC = () => {
    const downloads: DownloadItem[] = [
      { name: "Mixed Taggers Demo (VR)", link: "/downloads/mixed-taggers-demo.zip" },
      { name: "Sprite Sheet Pack", link: "/downloads/sprite-sheet-pack.zip" },
      { name: "Level System Tutorial", link: "/downloads/level-system-tutorial.pdf" },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Downloads</h1>
        <p>Here are some resources and demos:</p>
        <ul>
          {downloads.map((item, index) => (
            <li key={index}>
              <a href={item.link} download>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Downloads;
  