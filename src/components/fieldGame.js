import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  render() {
    return <div>{console.log(this.props.value2)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    value2: state
  };
};

export default connect(mapStateToProps)(FieldGame);
