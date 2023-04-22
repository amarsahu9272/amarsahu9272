import React from "react";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Skills = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Slide>
        <Container>
          <Row>
            <Col lg={4} xs={8}>
              <h1 className="display-3 skill-h">
                I can work <p className="with">with</p>{" "}
              </h1>
              {/* <Card.Text>
                <p
                  style={{
                    fontSize: "17px",
                    fontWeight: "500",
                    textAlign: "justify",
                    color: "white",
                  }}
                >
                  📊GitHub Stats :
                </p>
              </Card.Text>
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=amarsahu9272&theme=react&hide_border=true"
                alt="skills"
                className="skills-img img-fluid animated"
              /> */}
              <Card className="nbcard">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon
                      className="skill"
                      size="2x"
                      icon={faHtml5}
                    />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/html-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                    alt="html"
                  ></img>
                </div>
                <br />

                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon
                      className="skill"
                      size="2x"
                      icon={faCss3Alt}
                    />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                    alt="CSS"
                  ></img>
                </div>
                <br />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon className="skill" size="2x" icon={faJs} />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                    alt="javscript"
                  ></img>
                </div>
                <br />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon
                      className="skill"
                      size="2x"
                      icon={faReact}
                    />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                    alt="react"
                  ></img>
                </div>
                <br />

                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon
                      className="skill"
                      size="2x"
                      icon={faNodeJs}
                    />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="nodeJs"
                  ></img>
                </div>

                <br />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Button
                    variant={darkMode ? "outline-light" : "outline-dark"}
                    className="skills-btn"
                  >
                    <FontAwesomeIcon
                      className="skill"
                      size="2x"
                      icon={faBootstrap}
                    />
                  </Button>
                  <img
                    src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
                    alt="bootstrap"
                  ></img>
                </div>
              </Card>
            </Col>
            <Col lg={2} xs={4}>
              <br></br>
              {/* <Card className="nbcard">
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faHtml5} />
                </Button>
                <br />

                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faCss3Alt}
                  />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faJs} />
                </Button>
                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon className="skill" size="2x" icon={faReact} />
                </Button>
                <br />

                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faNodeJs}
                  />
                </Button>

                <br />
                <Button
                  variant={darkMode ? "outline-light" : "outline-dark"}
                  className="skills-btn"
                >
                  <FontAwesomeIcon
                    className="skill"
                    size="2x"
                    icon={faBootstrap}
                  />
                </Button>
              </Card> */}
            </Col>
            <Col lg={6} xs={12}>
              <br></br>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Frontend</Card.Title>
                  <Card.Text>
                    HTML, CSS, JavaScript, ReactJs, Material/UI
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Backend</Card.Title>
                  <Card.Text>ExpressJS, NodeJS, MongoDB.</Card.Text>
                </Card.Body>
              </Card>
              <Card className="skill-nbcard">
                <Card.Body>
                  <Card.Title>Tools</Card.Title>
                  <Card.Text>
                    VS-Code, Git & Github, Postman, MongoDB Atlas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br></br>
          <hr></hr>
        </Container>
      </Slide>
    </div>
  );
};

export default Skills;
