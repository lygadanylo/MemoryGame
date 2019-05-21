import React, {Component} from "react";
import { connect } from "react-redux";

class Field extends Component {
    constructor(props){
        super(props);
        this.props={};
        this.handelButtonValue=this.handelButtonValue.bind(this);
        this.paintBlock = this.paintBlock.bind(this);
    }
     handelButtonValue(){
      const {inputValue} = this.props;
      let buttonList = [];
      for(let i = 0; i<inputValue;i++){
        var elem = Math.floor(Math.random()*(100-1)+1);
        buttonList.push(<button className="buttons" value={elem}>{elem}</button>);
      }
      return(buttonList);
    }
    paintBlock(){
      let divList = [];
      const {inputValue} = this.props;
      for(let i =0; i < inputValue; i++){
        divList.push(<div>{this.handelButtonValue()}</div>);
        console.log(divList)
      }
      return(divList)
    }
    
    render(){
        return(
            <div className="button-field-wrapper">
            {this.paintBlock()}
            </div>
           
        );
    }
}

const mapStateToProps = state =>{
    const {inputValue} = state;
    return{
        inputValue
    }
}

export default connect(mapStateToProps)(Field);