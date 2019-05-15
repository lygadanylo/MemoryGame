import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  render() {
    const { inputValue } = this.props;
    return <div>{inputValue}</div>;
  }
}

const mapStateToProps = state => {
  const { inputValue } = state;
  return {
    inputValue
  };
};

export default connect(mapStateToProps)(FieldGame);
