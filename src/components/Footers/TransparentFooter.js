/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-transparent-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © 2022, Designed by{" "}
          <a
            href="https://www.linkedin.com/company/sopwer/about/"
            target="_blank"
          >
            PT Sopwer Teknologi Indonesia
          </a>
          . Coded by{" "}
          <a
            href="https://azimcopas.netlify.com"
            target="_blank"
          >
            Azim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
