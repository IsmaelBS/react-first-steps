import React from "react";

function TechItem({ tech, deleteTech }) {
  return (
    <li key={tech}>
      {tech}
      <button type="button" onClick={deleteTech}>
        Deletar
      </button>
    </li>
  );
}

export default TechItem;
