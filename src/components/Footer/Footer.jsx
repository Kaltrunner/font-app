import "./footer.css";

function Footer() {
  return (
    <div className="footer-body-div">
      <div className="line-div"></div>

      <div className="container text-center" id="footer-div">
        <div className="row footer-row">
          <div className="col footer-col">
            Resources:
            <br />
            <a
              id="tag"
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Helvetica"
            >
              Wikipedia
            </a>
            <br />
            <a
              id="tag"
              target="_blank"
              rel="noreferrer"
              href="https://fsymbols.com/"
            >
              fsymbols
            </a>
          </div>
          <div className="col"> </div>
          <div className="col">
            Designed and developed by{" "}
            <a
              id="footer-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.erikmrussell.com/"
            >
              Erik Russell
            </a>{" "}
            — ©2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
