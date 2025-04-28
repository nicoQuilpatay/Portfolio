import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! soy<span className="purple">Nicolas Quilpatay </span>
            de <span className="purple"> San Juan Argentina.</span>
            <br />
            Soy estudiante avanzado de la Tecnicatura Universitaria de Software en Universidad Catolica de Cuyo.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Ademas de programar me gusta :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Impresiones 3D
            </li>
            <li className="about-activity">
              <ImPointRight /> Deportes
            </li>
            <li className="about-activity">
              <ImPointRight /> Inteligencia Artificial
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
