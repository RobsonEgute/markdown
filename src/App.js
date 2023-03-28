import './App.css';
import React from "react";
import {marked} from "marked";
/*
const editorStyle = {
  display: "inline-block",
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "50%",
  height: "600px",
  borderLeft: "3px solid blue",
  borderRight: "3px solid blue",
  borderBottom: "3px solid blue"
}*/
//a header (H1 size), a sub header (H2 size), a link, inline code, 
//a code block, a list item, a blockquote, an image, and bolded text

marked.setOptions({
  breaks: true
})
class MarkdownComponent extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    input: `
# H1  

## H2  

### H3  

*italicized text*  

> blockquote  

- First item  
- Second item  
- Third item  

\`code\`   
 
\`\`\` 
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}  
\`\`\`  

![alt text](image.jpg)  

**bold text**  

[title](https://www.example.com)
    `,
    visibility: true
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

handleChange(event) {
  this.setState({
    input: event.target.value
  })
}
handleClick(event) {
  event.preventDefault()
  this.setState(state => {
    if (state.visibility === true) {
      return {visibility: false}
    } else {
      return {visibility: true}
    }
  })
};

render() {
  if (this.state.visibility === true) {
    return (
<div className="container1">
      <h1>Markdown Previewer</h1>
        <div className="headerContainer1">
          <div className="header1">
            <button className="toggle1" type="button" onClick={this.handleClick}></button>
          </div>
        <textarea id="editor" onChange={this.handleChange} value={this.state.input}> </textarea>
      </div>
  <div className="previewContainer1">
    <div className="pheader"></div>
  <div id="preview" inputText={this.state.input} dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} />
  </div>
</div>
    )
  } else {
    return (
      <div className="container2">
      <h1>Markdown Previewer</h1>
        <div className="header2">
          <button className="toggle2" onClick={this.handleClick}></button>
          <div className="previewBlock2" id="previewBlock2" inputText={this.state.input} dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} />
        </div>
      </div>
    )
  }
  
}
}

function App() {
  return (
    <div className="App">
      <MarkdownComponent />
    </div>
  );
}

export default App;
