import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContainer className="main-footer">
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              {/* column 1 */}
              <div className="col-md-3 col*sm-6">
                <h4> lorem ipsum</h4>
                <ul>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                </ul>
              </div>
              {/* column 2 */}
              <div className="col-md-3 col*sm-6">
                <h4> lorem ipsum</h4>
                <ul>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                </ul>
              </div>
              {/* column 2 */}
              <div className="col-md-3 col*sm-6">
                <h4> lorem ipsum</h4>
                <ul>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                </ul>
              </div>
              {/* column 2 */}
              <div className="col-md-3 col*sm-6">
                <h4> lorem ipsum</h4>
                <ul>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                  <li>
                    <a href="/"> lorem, ipsum</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="text-xs-center">&copy;{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--maindark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li {
    list-style: none;
    text-decoration: none;
  }
  ul li a {
    color: var(--mainGrey);

    text-decoration: none;
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
