import { React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Twitter from "../media/Twitter.png";
import googleDoc from "../media/googleDoc.png";
import weather from "../media/weather.png";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12} style={{ marginTop: "1rem" }}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={weather} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Weather-Websites-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>
                                  Weather websites offer current weather
                                  information including temperature, wind,
                                  humidity, and air pressure for various
                                  locations.
                                </tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://assignment-weather.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/amarsahu9272/assignment-weather"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>

              <Col lg={4} sm={12} style={{ marginTop: "1rem" }}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center style={{ height: "336px" }}>
                    <div className="flip-card" class="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={Twitter} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Twitter-Clone-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>
                                  Twitter-clone is a social media platform that
                                  allows users to send and read short messages
                                  known as "tweets".Social SIgn-In/Sign-up
                                </tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <br />
                  <div>
                    <a
                      href="https://twitter-clone-1-1.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>
                    <a
                      href="https://github.com/amarsahu9272/twitter-clone-1.1"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12} style={{ marginTop: "1rem" }}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={googleDoc} />
                          <Card.Body>
                            <Card.Title align="center">
                              -Google-Doc-Clone-
                            </Card.Title>
                            <Card.Text>
                              <td style={{ fontSize: "14px" }}>
                                <p align="center">Features</p>
                                <tr>
                                  Google Docs Clone is a web-based word
                                  processing software, used for Editing file
                                  texts.
                                </tr>
                              </td>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                            alt="css3"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                            alt="html5"
                            width="40"
                            height="40"
                          />

                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                            alt="javascript"
                            width="40"
                            height="40"
                          />
                          <img
                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                            alt="react"
                            width="40"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://google-doc-clone-kohl.vercel.app/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Project
                      </Button>
                    </a>

                    <a
                      href="https://github.com/amarsahu9272/googleDocClone"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
              <Col lg={4} sm={12}></Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
    </div>
  );
};

export default Experience;
