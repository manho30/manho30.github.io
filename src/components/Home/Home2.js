import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a student study at the Secondary High School in <b className='red'>M</b>
                                                   <b className='white'>a</b>
                                                   <b className='red'>l</b>
                                                    <b className='white'>a</b>
                                                    <b className='red'>y</b>
                                                    <b className='white'>s</b>
                                                    <b className='red'>i</b>
                                                    <b className='white'>a</b>
              <br/>
              <br/>
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br/>
              <br/>
              <p>
                I am a <b className="purple">Full Stack Web Developer</b> with{" "}
                <b className="purple">React.js, Vue.js, MongoDB, Python </b> as my tech stack.
              </p>
              <br/>
              <br/>
              <b className="purple">But </b>
              <i>
                {" "}
                My real ambission is to become a doctor (SUPRISE!!!)
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manho30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/manho.30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
