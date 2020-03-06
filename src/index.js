import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Arrow(props) {
  return (
    <button className="arrow" onClick={props.handler}>
      {props.value}
    </button>
  );
}

function Image(props) {
  return <img src={props.source} alt={"landscape"}></img>;
}

const images = [];

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    images[0] = require("./images/img1.jpeg");
    images[1] = require("./images/img2.jpeg");

    this.state = {
      index: 0
    };
  }

  handleClickBack() {
    if (this.state.index !== 0) {
      this.setState({
        index: this.state.index - 1
      });
    } else {
      this.setState({
        index: images.length - 1
      });
    }
  }

  handleClickForward() {
    if (this.state.index !== images.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  }

  render() {
    return (
      <div className="slideshow">
        <Arrow value={"<"} handler={() => this.handleClickBack()} />
        <Image source={images[this.state.index]} />
        <Arrow value={">"} handler={() => this.handleClickForward()} />
      </div>
    );
  }
}

ReactDOM.render(
  <div className="wrap">
    <Slideshow />
  </div>,
  document.getElementById("root")
);
