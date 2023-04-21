import { useState, React } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Contact = ({ darkMode }) => {
  const [templateParams, setTemplateParams] = useState({
    from_name: "",
    message: "",
  });

  const onInputChange = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .send("service_4wup2qr", "template_rg5dyma", templateParams, "osf3OleBZAheD_Pz_")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    swal({
      title: "Sent Successfully!",
      text: "Glad to hear from you! I will get back to you as soon possible",
      icon: "success",
    });
    setTemplateParams({
      from_name: "",
      message: "",
    });
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Container>
        <Row>
          <Col lg={4}>
            <br></br>
            <h2 className="lead">
              <span>Contact me!</span>
            </h2>
            <p className="contact-text">
              Please feel free to drop any suggestions, feedback, or
              opportunities you may have. If you're interested in collaborating
              on a project, I'd be happy to discuss that as well. If you require
              a response, please leave your contact details. Thank you!
            </p>

            {/* <h2 className="lead">Contact Details</h2> */}
            <div className="contact-text">
              <p>
                Amar Sahu <br /> Jamshedpur, Jharkhand <br />{" "}
                <strong style={{ fontWeight: "600" }}>+91 727-383-6256</strong>
                <br />
                <strong style={{ fontWeight: "600" }}>
                  amarsaahu1997@gmail.com
                </strong>
              </p>
              <br />
              <a
                className="social-icons"
                href="https://www.linkedin.com/in/amar-s-4b3359145/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                  <FontAwesomeIcon
                    className="dark"
                    size="lg"
                    icon={faLinkedin}
                  />
                </Button>
              </a>

              <a
                className="social-icons"
                href="https://github.com/amarsahu9272"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                  <FontAwesomeIcon className="dark" size="lg" icon={faGithub} />
                </Button>
              </a>

              <a
                className="social-icons"
                href="https://www.instagram.com/amarsahu927/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant={darkMode ? "outline-light" : "outline-dark"}>
                  <FontAwesomeIcon
                    className="dark"
                    size="lg"
                    icon={faInstagramSquare}
                  />
                </Button>
              </a>
            </div>
          </Col>
          <Col lg={8}>
            <br></br>

            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.from_name}
                  name="from_name"
                  className="ph name"
                  type="name"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  onChange={(e) => onInputChange(e)}
                  value={templateParams.message}
                  name="message"
                  as="textarea"
                  rows={8}
                  className="ph msg"
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button
                style={{ marginTop: "1.3%" }}
                variant={darkMode ? "outline-light" : "outline-dark"}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <img
          src="https://sagarmude.netlify.app/static/media/avatar.711110cc.svg"
          alt="contact"
          className="contact-img img-fluid"
        />
      </Container>
    </div>
  );
};

export default Contact;
