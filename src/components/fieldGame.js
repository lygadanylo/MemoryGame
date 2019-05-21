import React, { Component } from "react";
import { connect } from "react-redux";
import Fields from "./matrixField/Field";

class FieldGame extends Component { 
  renderField(){
    const {inputValue} = this.props;
    if(inputValue){
      return(<Fields />);
    }
    console.log(inputValue)
  };
  render(){
    return(
      <section>
        { this.renderField() }
      </section>
    );
  }
}

const mapStateToProps = state => {
  const { inputValue } = state;
  return {
    inputValue
  };
};

export default connect(mapStateToProps)(FieldGame);
