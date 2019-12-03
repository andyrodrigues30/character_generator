import React from 'react';
import './App.css';

const json = require('./data.json');

const personality = json["personality"];
const character = json["character"];
const character2 = json["character2"];
const clothing = json["clothing"];
const verb = json["verb"];
const holdingitem = json["holdingitem"];
const ridingitem = json["ridingitem"];
const playingitem = json["playingitem"];

function getItem() {
  if (verb === 'holding') {
    let item = holdingitem[Math.floor(Math.random() * holdingitem.length)];
    return item
  } else if (verb === 'riding') {
    let item = ridingitem[Math.floor(Math.random() * ridingitem.length)];
    return item
  } else if (verb === 'playing') {
    let item = playingitem[Math.floor(Math.random() * playingitem.length)];
    return item
  } else {
    let item = character2[Math.floor(Math.random() * character2.length)];
    return item
  }
}

class App extends React.Component {
  state = {
    text: '...'
  }

  onClickGenerate = () => {
    const sentence = `${personality[Math.floor(Math.random() * personality.length)]} ${character[Math.floor(Math.random() * character.length)]} wearing ${clothing[Math.floor(Math.random() * clothing.length)]} ${verb[Math.floor(Math.random() * verb.length)]} ${getItem()}.`;
    this.setState({
      text: sentence
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Character Generator</h1>
        <button onClick={this.onClickGenerate}>Generate</button>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App;
