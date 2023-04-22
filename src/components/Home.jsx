import React from 'react'
import { AttentionSeeker } from 'react-awesome-reveal';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import profile from '../media/profile.jpg'
const Home = ({ darkMode }) => {
    return (
        <div>
            <AttentionSeeker shakeX>
                <Row>
                    <Container align="center">
                        <Col lg={7} xs={7}>
                            <br />
                        
                            <div className="img">
                            <img  src={profile} alt="Amar_Image"/>
                            </div>
                        </Col>
                    </Container>
                </Row>
                <Row>
                    <Col lg={12} xs={12}>
                        <h1 className="display-3 hello" align="center"><code> Amar Sahu</code></h1>
                        <h2 className="lead" align="center">
                            <span
                                className="txt-rotate"
                                data-period="500"
                                data-rotate='[ " Frontend Developer"]'>
                            </span>
                        </h2>
                    </Col>
                </Row>
            </AttentionSeeker>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Home
