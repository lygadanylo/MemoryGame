import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import times from "lodash/times";

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
      let firstNumer = 0;
      // number1
      // number2
      for(let i =0; i < inputValue * inputValue; i++){
        var elem = Math.floor(Math.random()*(number-1)+1);
        if(i !== number1 && i!== numer2) {
        divList.push(<div><button className="buttons" value={elem}>{elem}</button></div>);
        console.log(divList)
        } else {
          const part21 = firstNumer ? 21 - firstNumer : elem;
          divList.push(<div><button className="buttons" part21={elem}>{part21}</button></div>);
          firstNumer = elem;
        }

      }
      return(divList)
    }
    
    render(){
      const {inputValue} = this.props;
      var number = Math.floor(Math.random()*(100-1)+1);
      const sizeMatrix = inputValue*inputValue;
        return(
          <Fragment>
              <div className="button-field-wrapper">
              {
                times(sizeMatrix, i=> {
                  
                  return(
                    <div><button className="buttons" value={elem}>{elem}</button></div>
                  )
                }
              }
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