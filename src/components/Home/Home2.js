import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
//import pdf from "../../Assets/../Assets/CV Nicolas Quilpatay TUDS.pdf";
import pdf2 from "../../Assets/../Assets/CV Gonzalo Nicolas Quilpatay TUDS.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home2() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
<Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    Déjame <span className="purple">presentarme</span>
  </h1>

  <p className="home-about-body">
    Me especializo en crear soluciones digitales funcionales y eficientes.
    <br />
    Aprendí desarrollando, investigando, probando y resolviendo problemas en escenarios reales.
    <br />
    <br />
    Soy Técnico Universitario en Desarrollo de Software, egresado de la{" "}
    <i>
      <b className="purple">Tecnicatura Universitaria en Desarrollo de Software</b>
    </i>{" "}
    de la{" "}
    <i>
      <b className="purple">
        Universidad Católica de Cuyo
      </b>
    </i>.
    <br />
    <br />
    Disfruto transformar ideas en productos concretos dentro del ámbito del software.
    Trabajo principalmente con{" "}
    <b className="purple">Node.js</b>, utilizando{" "}
    <i>
      <b className="purple">librerías modernas de JavaScript y frameworks</b>
    </i>{" "}
    como{" "}
    <i>
      <b className="purple">React.js</b>
    </i>.
  </p>

  <p className="home-about-body">
    Mi stack principal es{" "}
    <i>
      <b className="purple">MERN</b>
    </i>. 
    Podés acceder a mi CV y a una sección de proyectos donde se reflejan trabajos y desarrollos recientes.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        {/* Sección de CV agregada */}
        <Row className="resume-section">
          <Col md={12} className="resume-content">
            <Particle />

            <Row className="resume">
              <Document file={pdf2} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
              </Document>
            </Row>

            <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
              <Button
                variant="primary"
                href={pdf2}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Descargar CV
              </Button>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Me encuentras en</h1>

            <ul className="home-about-social-links">
            {/*}
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              */}
              {/*

              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nicolas-quilpatay-853477246/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nico_quilpatay/"
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