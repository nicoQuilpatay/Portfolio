import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador de Software",
          "Freelancer",
          "Fullstack en Formación...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
        delay: 40, // <<< Agregás esta línea

      }}
    />
  );
}

export default Type;
