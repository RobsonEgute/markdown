import './App.css';
import React from "react";
import {marked} from "marked";

//a header (H1 size), a sub header (H2 size), a link, inline code, 
//a code block, a list item, a blockquote, an image, and bolded text
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
    `
  };
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
      <textarea id="editor" onChange={this.handleChange} value={this.state.input}> </textarea>
      <div id="preview" inputText={this.state.input} dangerouslySetInnerHTML={{ __html: marked(this.state.input)}} />
    </div>
  )
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
