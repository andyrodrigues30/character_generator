import React from 'react';
import './App.css';

const json = require('./data.json');

function getItem() {
  if (json["verb"] === 'holding') {
    let item = json["holdingitem"][Math.floor(Math.random() * json["holdingitem"].length)];
    return item
  } else if (json["verb"] === 'riding') {
    let item = json["ridingitem"][Math.floor(Math.random() * json["ridingitem"].length)];
    return item
  } else if (json["verb"] === 'playing') {
    let item = json["playingitem"][Math.floor(Math.random() * json["playingitem"].length)];
    return item
  } else {
    let item = json["character2"][Math.floor(Math.random() * json["character2"].length)];
    return item
  }
}

class App extends React.Component {
  state = {
    text: '...'
  }

  onClickGenerate = () => {
    const sentence = `${json["personality"][Math.floor(Math.random() * json["personality"].length)]} ${json["character"][Math.floor(Math.random() * json["character"].length)]} wearing ${json["clothing"][Math.floor(Math.random() * json["clothing"].length)]} ${json["verb"][Math.floor(Math.random() * json["verb"].length)]} ${getItem()}.`;
    this.setState({
      text: sentence
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Character Generator</h1>
        <button onClick={this.onClickGenerate}>Generate</button>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
