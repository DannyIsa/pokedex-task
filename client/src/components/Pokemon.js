import React, { Component } from "react";
import PokeImage from "./PokeImage";
import Catch from "./Catch";
import TypeList from "./TypeList";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.pokemon.length === 0) {
      return null;
    }

    return (
      <div
        style={{
          border: "1px solid black",
          width: "100px",
          margin: "5px",
          padding: "5px",
        }}
      >
        <PokeImage data={this.props.pokemon} />
        <p>
          <Catch pokemon={this.props.pokemon.name} />
        </p>
        <p>
          <b>{this.props.pokemon.name}</b>
        </p>
        <p>
          <b>Weight:</b> {this.props.pokemon.weight}
        </p>
        <p>
          <b>Height:</b> {this.props.pokemon.height}
        </p>
        <p>
          <b>Type:</b>
          {this.props.pokemon.type.map((type) => (
            <TypeList key={type} type={type} />
          ))}
        </p>
      </div>
    );
  }
}
