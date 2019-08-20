import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "React", "React Native"],
    newTech: ""
  };

  handleNewTechChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleNewTechSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleNewTechSubmit}>
        <ul>
          {this.state.techs.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleNewTechChange}
          value={this.state.newTech}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
}

export default TechList;
