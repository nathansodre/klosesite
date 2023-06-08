import React from "react";

function ContactComponent() {
  return (
    <section id="contact">
      <hr className="hrcontact" />
      <h1 className="contact">Contact</h1>
      <hr className="hrcontact" />

      <div className="container">
        <h2 className="text-center mb-4">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-2">
            <a
              href="https://www.facebook.com/KloseOfficial"
              target="_blank"
              rel="noopener"
              className="text-decoration-none"
            >
              <i className="social-icon fab fa-facebook fa-3x d-block text-center mb-3"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://twitter.com/klosetome"
              target="_blank"
              rel="noopener"
              className="text-decoration-none"
            >
              <i className="social-icon fab fa-twitter fa-3x d-block text-center mb-3"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://www.instagram.com/officialklose/"
              target="_blank"
              rel="noopener"
              className="text-decoration-none"
            >
              <i className="social-icon fab fa-instagram fa-3x d-block text-center mb-3"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://www.youtube.com/@KloseOfficial"
              target="_blank"
              rel="noopener"
              className="text-decoration-none"
            >
              <i className="social-icon fab fa-youtube fa-3x d-block text-center mb-3"></i>
            </a>
          </div>
          <div className="col-2">
            <a
              href="mailto:officialklose@gmail.com"
              className="text-decoration-none"
            >
              <i className="social-icon fas fa-envelope fa-3x d-block text-center mb-3"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
