import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gPetsStore from "../../Assets/Projects/gPetsStore.png";
import gPets from "../../Assets/Projects/g-pets.png";
import eacDiario from "../../Assets/Projects/EacDiario.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis últimos <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Algunos de mis últimos proyectos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gPets}
              isBlog={false}
              title="G-Pets"
              description="GPets es una plataforma que usa códigos QR en collares para mejorar la seguridad de las mascotas. Al escanear el código, se accede a información clave del animal, como contacto y detalles médicos.
                            Desarrollado con React, alojado en AWS EC2 y con MongoDB para almacenar datos, GPets ofrece una solución rápida y segura para recuperar mascotas perdidas."
              ghLink="https://github.com/nicoquilpatay"
              demoLink="https://gpets.com.ar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eacDiario}
              isBlog={false}
              title="EAC diario"
              description="EAC diario es un diario donde los estudiantes pueden compartir sus experiencias y reflexiones sobre la Escuela. Los usuarios pueden, crear y editar publicaciones y luego compartirlas. Está diseñada para fomentar la interacción y el aprendizaje colaborativo entre los estudiantes."
              ghLink="https://github.com/nicoquilpatay"
              demoLink="https://eacdiario.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gPetsStore}
              isBlog={false}
              title="G-Pets Store"
              description="Tienda online de collares para mascotas. Desarrollada con Wordpress y WooCommerce, ofrece una experiencia de compra fácil y rápida."
              ghLink="https://github.com/nicoquilpatay"
              demoLink="https://gpets.store/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
