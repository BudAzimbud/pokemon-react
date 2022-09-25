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
                href="#"
                target="_blank"
              >
                About Us
              </a>
            </li>
        
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          <a
            href="#"
          >
            PokeMon Go !!!
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
