import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  render() {
    return <div>{console.log(this.props.inputValue)}</div>;
  }
}

const mapStateToProps = inputValue => {
  return {
    value2: inputValue
  };
};

export default connect(mapStateToProps)(FieldGame);
