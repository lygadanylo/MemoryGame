import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  render() {
    return <div>{console.log(this.props.inputValue)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state
  };
};

export default connect(mapStateToProps)(FieldGame);
