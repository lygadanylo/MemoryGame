import React, {Component, Fragment} from "react";
import { connect } from "react-redux";

class Field extends Component {
    constructor(props){
        super(props);
        this.props={};
        this.handelButtonValue=this.handelButtonValue.bind(this);
        this.paintBlock = this.paintBlock.bind(this);
    }
     handelButtonValue(){

    }
    paintBlock(){
      let divList = [];
      const {inputValue} = this.props;
      var number = Math.floor(Math.random()*(100-1)+1);
      console.log(number)
      for(let i =0; i < inputValue * inputValue; i++){
        var elem = Math.floor(Math.random()*(number-1)+1);
        divList.push(<div><button className="buttons" value={elem}>{elem}</button></div>);
        console.log(divList)
      }
      return(divList)
    }
    
    render(){
        return(
          <Fragment>
              <div className="button-field-wrapper">
                {this.paintBlock()}
              </div>
              <div>
                  <h1></h1>
              </div>
          </Fragment>
           
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