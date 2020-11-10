/*

The ReactJS code for the application: originally transpiled by Babel for initial tests.

*/


const outerDiv = {
  width: "45vw",
  height: "90vh",
  border: "1.5em groove teal"
};

const editorStyles = {
  backgroundColor: "#CCC",
  width: "90%",
  height: "80%",
  margin: "2em"
};

const previewStyles = {
  // backgroundColor: "#9a5",
  color: "white",
  width: "90%",
  height: "80%",
  margin: "2em",
  position: "relative",
  left: "1%"
};

marked.setOptions({
  breaks: true
});

class App extends React.Component {
  constructor(props) {
    super(props);
    $("body").css("background", "black");
    console.log("Yo!! Constructor!");
    this.state = {
      content: "# This is a Heading.\n## This is a Sub-Heading.\nA [Link](https://www.freecodecamp.com)\nInline code, `<div></div>`\n```// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n- A List Item\n> Block Quote!\n\n![React Logo](https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png=100x200)\n**Bold Text**"
    }
    
    $("#preview").append(marked(this.state.content));
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      content: event.target.value
    });
    console.log("change called!");
    this.makeChange();
  }
  
  makeChange() {
    $("#preview").dangerouslySetInnerHTML = {__html: marked(this.state.content)};
    console.log("change made!");
  }
  
  render() {
    return (
      <div style={{display: "flex"}}>
        <Editor editorText={this.state.content} handChange={this.handleChange} />
        <Preview previewText={this.state.content} />
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={outerDiv}>
        <div style={{width: "100%", height: "2em", backgroundColor: "#555", fontFamily: "sans-serif"}} ><center><b>Edit Here!</b></center></div>
        <textarea id="editor" style={editorStyles} onChange={this.props.handChange} value={this.props.editorText}>
        </textarea>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={outerDiv}>
        <div style={{width: "100%", height: "2em", backgroundColor: "#555", fontFamily: "sans-serif"}} ><center><b>Edit Here!</b></center></div>
        <span id="preview" style={previewStyles} dangerouslySetInnerHTML={{ __html: marked(this.props.previewText) }} />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
