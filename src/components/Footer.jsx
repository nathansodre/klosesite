import React from "react";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-whitesmoke py-4">
      <div className="container text-centered">
        <h6>&copy; {getCurrentYear()} Copyright Klose</h6>
      </div>
    </footer>
  );
};

export default Footer;
