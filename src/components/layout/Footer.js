import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer p-3 text-center bg-dark text-light">
        Developed by: &nbsp;
            <a href="https://github.com/mkotsabiuk" target="_blank" rel="noopener noreferrer">
          <span className="text-warning font-weight-normal">
            Mykola Kotsabiuk
            </span>
        </a>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API &nbsp;
            <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
          OMDB
            </a>
      </div>
    </footer>
  );
}

export default Footer;
