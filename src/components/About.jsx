import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import resume from "../media/Amar_sahu.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faInstagramSquare,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = ({ darkMode }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.09em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div className="about">
      <br></br>
      <br></br>
      <Fade>
        <Container align="center">
          <Row>
            <Col lg={8} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    <h2 className="lead">Hey! I'm Amar Sahu</h2>
                  </Card.Title>
                  <br></br>
                  <Card.Text>
                    <p
                      style={{
                        fontSize: "17px",
                        fontWeight: "500",
                        textAlign: "justify",
                      }}
                    >
                      A Frontend Developer experience in web designing and web
                      development & producting the Quality work. I typically use
                      HTML, CSS, and JavaScript to build the UI, work with
                      frameworks such as React and also responsible for ensuring
                      the website or application which is optimized for speed,
                      accessibility and usability.
                    </p>
                  </Card.Text>

                  {/* <a href={resume} target="_blank" rel="noreferrer noopener">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      View Resume
                    </Button>
                  </a>

                  <a href={resume} download>
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      Download Resume
                    </Button>
                  </a> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} align="center">
              <Card className="nbcard">
                <Card.Body>
                  <Card.Title>
                    {/* <h2 className="lead">Let's Connect!</h2> */}
                    <h2 className="lead">Resume</h2>
                  </Card.Title>
                  <br></br>

                  {/* <div>
                    <p>
                      <span> </span>Amar Sahu
                      <br /> Jamshedpur, Jharkhand
                      <br />{" "}
                      <strong style={{ fontWeight: "600" }}>
                        +91 727-383-6256
                      </strong>
                      <br />
                      <strong style={{ fontWeight: "600" }}>
                        amarsaahu1997@gmail.com
                      </strong>
                    </p>
                  </div>

                  <br />

                  <a
                    className="social-icons"
                    href="https://www.linkedin.com/in/amar-s-4b3359145/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faLinkedinIn}
                      />
                    </Button>
                  </a>

                  <a
                    className="social-icons"
                    href="https://github.com/amarsahu9272"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faGithub}
                      />
                    </Button>
                  </a>

                  <a
                    className="social-icons"
                    href="https://www.instagram.com/amarsahu927/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faInstagramSquare}
                      />
                    </Button>
                  </a> */}
                  <a href={resume} target="_blank" rel="noreferrer noopener">
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      View Resume
                    </Button>
                  </a>
                  <br />
                  <br />

                  <a href={resume} download>
                    <Button
                      variant={darkMode ? "outline-light" : "outline-dark"}
                      className="a"
                    >
                      <FontAwesomeIcon
                        className="dark"
                        size="lg"
                        icon={faFile}
                      />{" "}
                      Download Resume
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Fade>
    </div>
  );
};

export default About;
