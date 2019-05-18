import React, { Component } from "react";
import { connect } from "react-redux";
import Two from "./matrixField/twoOnTwo";
import Foure from "./matrixField/foureOnFoure"
import Three from "./matrixField/threeOnThree";

class FieldGame extends Component {
  reanderMatrix() {
    const { inputValue } = this.props;
    switch (inputValue) {
      case "2":
        return  <Two />
      case "3":
        return  <Three />  
      case "4":
        return  <Foure />
      default: 
        return <div>Empty</div>
    }
  }
  render() {
    return <div>{this.reanderMatrix()}{
      console.log("filed: "+ this.props.inputValue)
    }</div>;
  }
}

const mapStateToProps = state => {
  const { inputValue } = state;
  return {
    inputValue
  };
};

export default connect(mapStateToProps)(FieldGame);
