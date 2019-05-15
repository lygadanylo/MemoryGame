import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  reanderMatrix() {
    const { inputValue } = this.props;
    switch (inputValue) {
      case "2":
      return  <div>Done</div>
      default: 
      return <div>Empty</div>
    }
  }
  render() {
    const { inputValue } = this.props;
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
