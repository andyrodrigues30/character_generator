import React, { Component, Fragment } from "react";
import "./App.css";

const json = require("./data.json");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetched: false,
      history: []
    };
  }

  getRandom = obj => obj[Math.floor(Math.random() * obj.length)];

  genCharacter = () => {
    const {
      verb,
      holdingitem,
      ridingitem,
      playingitem,
      character2,
      personality,
      character,
      clothing
    } = json;

    let item;

    switch (verb) {
      case "holding":
        item = this.getRandom(holdingitem);
        break;
      case "riding":
        item = this.getRandom(ridingitem);
        break;
      case "playing":
        item =this.getRandom(playingitem);
        break;
      default:
        item = this.getRandom(character2);
        break;
    };

    this.setState({
      fetched: true,
      history: [
        ...this.state.history,
        {
          personality: this.getRandom(personality),
          character: this.getRandom(character),
          clothing: this.getRandom(clothing),
          verb: this.getRandom(verb),
          item
        }
      ]
    });
  }

  imp = word => <span id="imp">{word}</span>;

  render() {
    console.log(this.state.history);
    const { fetched } = this.state;

    let prev;
    let current;

    if (this.state.history.length > 0) {
      const { personality, character, clothing, verb, item } = this.state.history[this.state.history.length - 1];

      current = (
        fetched
          ? <Fragment>{personality} {this.imp(character)} wearing {this.imp(clothing)} {verb} {this.imp(item)}.</Fragment>
          : "..."
      );
    }

    if (this.state.history.length > 1) {
      const { personality, character, clothing, verb, item } = this.state.history[this.state.history.length - 2];

      current = (
        fetched
          ? <Fragment>{personality} {this.imp(character)} wearing {this.imp(clothing)} {verb} {this.imp(item)}.</Fragment>
          : "..."
      );
    }

    return (
      <div className="App">
        <header>
          <h1>Character Generator</h1>
        </header>
        <main>
          <button className="genButton" onClick={this.genCharacter}>GENERATE</button>
          <div className="sentence">
            <h2>{prev}</h2>
            <h2>{current}</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
