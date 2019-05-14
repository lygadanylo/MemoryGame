import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { buttonsFunc } from "../actions/actions";

class Level extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValueState: "" };
    //this.handelClick = this.handelClick.bind(this);
  }
  handelClick = e => {
    this.setState({ inputValueState: e.target.value });
    const inputsV = e.target.value;
    console.log("click");
    const { buttonsFunc } = this.props;
    console.log(buttonsFunc);
    buttonsFunc(inputsV);
  };
  render() {
    return (
      <div>
        <button value="2" onClick={this.handelClick}>
          2 x 2
        </button>
        {/* {
                    console.log(this.props.inputValue)
                } */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { inputValue } = state;
  return {
    inputValue
  };
};

const mapDispatchToProps = {
  buttonsFunc
};

Level.propTypes = {
  inputValue: PropTypes.string,
  buttonsFunc: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Level);
