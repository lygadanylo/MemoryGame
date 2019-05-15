import React, { Component } from "react";
import { connect } from "react-redux";
import Two from "./matrixField/twoOnTwo";

class FieldGame extends Component {
  reanderMatrix() {
    const { inputValue } = this.props;
    switch (inputValue) {
      case "2":
      return  <Two />
      default: 
      return <div>Empty</div>
    }
  }
  render() {
    return <div>{this.reanderMatrix()}</div>;
  }
}

const mapStateToProps = state => {
  const { inputValue } = state;
  return {
    inputValue
  };
};

export default connect(mapStateToProps)(FieldGame);
