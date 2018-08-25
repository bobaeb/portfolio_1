/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div>
          <div style={{ width: "800px", height: "195px", margin: "0 auto" }}>
            <div
              style={{
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)"
              }}
            >
              <h1>
                <a
                  href="home"
                  style={{
                    color: "#000000",
                    textDecoration: "none",
                    fontSize: "27px",
                    fontWeight: 700,
                    letterSpacing: "1px"
                  }}
                >
                  <span>Bobae Park</span>
                </a>
                <ul style={{ marginTop: "25px" }}>
                  <li style={{ marginRight: "30px", float: "left" }}>
                    <a
                      href="about"
                      style={{ color: "#000000", textDecoration: "none" }}
                    >
                      <span>ABOUT</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="work"
                      style={{ textDecoration: "none", color: "#000000" }}
                    >
                      <span>PROJECTS</span>
                    </a>
                  </li>
                </ul>
              </h1>
            </div>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
