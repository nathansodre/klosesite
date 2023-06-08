import React, { useState } from "react";

const MusicComponent = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const handlePrev = () => {
    setActiveVideo((prevVideo) => (prevVideo === 0 ? 4 : prevVideo - 1));
  };

  const handleNext = () => {
    setActiveVideo((prevVideo) => (prevVideo === 4 ? 0 : prevVideo + 1));
  };

  const videos = [
    "https://www.youtube.com/embed/2nGJLCZG_fI",
    "https://www.youtube.com/embed/Zpy8vuUIkxQ",
    "https://www.youtube.com/embed/aKFLZ7acHaQ",
    "https://www.youtube.com/embed/5poFtTbG-K0",
    "https://www.youtube.com/embed/FL84yPbkgCw",
  ];

  return (
    <section id="music">
      <hr />
      <h1 className="music">Music & Videos</h1>
      <hr />
      <div id="musiccarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {videos.map((video, index) => (
            <div
              className={`carousel-item ${
                index === activeVideo ? "active" : ""
              }`}
              key={index}
            >
              <iframe
                width="600px"
                height="380px"
                src={video}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#musiccarousel"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#musiccarousel"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="eppolitics">EP Politics (2019)</h2>
      <div className="spotify-player embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://open.spotify.com/embed/album/2gWh83ESfR9L44POMgEjfc"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </section>
  );
};

export default MusicComponent;
