import React, { Component } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    techs: [],
    newTech: ""
  };

  //Executado assim que o componente é montado
  componentDidMount() {
    const techs = JSON.parse(localStorage.getItem("techs"));

    if (techs) {
      this.setState({ techs });
    }
  }

  //Executado assim que houver alguma alteração nas props ou no estado do componente
  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  componentWillUnmount() {}

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

  handleDeleteTech = delTech => {
    this.setState({ techs: this.state.techs.filter(tech => tech !== delTech) });
  };

  render() {
    return (
      <form onSubmit={this.handleNewTechSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              deleteTech={() => this.handleDeleteTech(tech)}
            />
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
