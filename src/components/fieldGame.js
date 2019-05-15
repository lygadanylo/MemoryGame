import React, { Component } from "react";
import { connect } from "react-redux";

class FieldGame extends Component {
  qwe() {
    const { inputValue } = this.props;
    switch (inputValue) {
    }
  }
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
