import logo from './logo.svg';
import './App.css';
import React from "react";
import Marked from "marked";

class Markdown extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    input: ""
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    input: event.target.value
  })
}

render() {
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <textarea id="editor" onChange={this.handleChange}> </textarea>
      <div id="preview">{this.state.input}</div>
    </div>
  )
}
}

function App() {
  return (
    <div className="App">
      <Markdown />
    </div>
  );
}

export default App;
