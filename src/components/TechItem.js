import React from "react";
import propTypes from "prop-types";

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

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  tech: propTypes.string,
  deleteTech: propTypes.func.isRequired
};

export default TechItem;
