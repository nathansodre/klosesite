import React, { useState } from "react";

function TitleComponent() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <section id="title">
      <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent">
        <div className="container-fluid">
          <div className="ml-auto">
            <img
              src="./images/kloselogoblack.png"
              width="120"
              height="120"
              alt="Klose logo"
            />
          </div>
          <button
            id="menuButton"
            className="navbar-toggler"
            aria-label="Toggle navigation"
            onClick={handleMenuClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${showMenu ? " show" : ""}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto menubar">
              <a className="nav-link" href="#">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#music">
                Music
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default TitleComponent;
