import React from "react";

function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed by: &nbsp;
            <a href="https://github.com/mkotsabiuk" target="_blank">
              <span className="text-warning font-weight-normal">
                Mykola Kotsabiuk
            </span>
            </a>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API &nbsp;
            <a href="http://www.omdbapi.com/" target="_blank">
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
