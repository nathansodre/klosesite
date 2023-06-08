import React, { useState } from "react";

function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 2 ? 2 : prevSlide + 1));
  };

  return (
    <section id="about">
      <hr />
      <h1 className="aboutus">About Us</h1>
      <hr />

      <div id="mycarousel" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className={`carousel-item${activeSlide === 0 ? " active" : ""}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="./images/nathanss.jpg"
                    alt="Imagem do slide"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Nathan S. Sodré,</h2>
                  <h3>
                    lead singer, songwriter, guitarist and occasional
                    keyboardist.
                  </h3>
                  <p>
                    "My first experience as a musician occurred during my
                    teenage years when my parents gifted me a bass guitar at the
                    age of 15. My parents are huge fans of 80s new wave music,
                    which introduced me to various influential artists including
                    The Cure, The Police, R.E.M, Talking Heads, Depeche Mode,
                    and Radiohead. In addition, I frequently listen to other
                    bands such as Pink Floyd, Rush, The Beatles, Red Hot Chili
                    Peppers, Jamiroquai, and The Killers. I am also an
                    undergraduate in Environmental Management (IFRS, 2019) and a
                    science fiction enthusiast."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`carousel-item${activeSlide === 1 ? " active" : ""}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="./images/ramons.jpg"
                    alt="Ramon de Souza"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Ramon de Souza,</h2>
                  <h3>bassist and songwriter.</h3>
                  <p>
                    "Since I was young, I have had contact with music. My
                    grandma used to sing at the local church choir, and my
                    mother also sang with the same choir. My uncle used to play
                    drums in the church's band, so I had a little incentive to
                    be a musician because of my family. My father and my
                    grandfather from my father's side are huge fans of rock and
                    metal, and I was influenced a lot by them to listen to bands
                    from the 60s until the 90s. At the beginning, I was in doubt
                    about whether to choose a guitar or a bass because my family
                    already has 3 drummers, I never thought about it before, so
                    I decided that the bass was the best instrument that I could
                    use to express my music and ideas to the world."
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`carousel-item${activeSlide === 2 ? " active" : ""}`}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="./images/lucasalopez.jpg"
                    alt="Lucas A. Lopez"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h2>Lucas A. Lopez,</h2>
                  <h3>guitarist, songwriter and occasional drummer.</h3>
                  <p>
                    "My family members say that when I was in my mother's womb,
                    my father played the guitar and sang to me. I've been an
                    artist for as long as I can remember, and even though
                    sometimes I'm not fully engaged in my job, life brings it
                    overwhelmingly. At the age of 15, I started as a drummer and
                    backing vocalist in Contra Termo, my first band. In 2017, I
                    joined Klose, where I continued in the same role. Today, in
                    the band, I sing, play guitar, and synthesizers. Since then,
                    we have been together, experiencing what life has to offer."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mycarousel"
          data-bs-slide="prev"
          onClick={handlePrevSlide}
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
          data-bs-target="#mycarousel"
          data-bs-slide="next"
          onClick={handleNextSlide}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
