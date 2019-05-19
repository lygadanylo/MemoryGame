import React, {Component} from "react";
import { connect } from "react-redux";

class Three extends Component {
    constructor(props){
        super(props);
        this.props={};
        this.handelButtonValue=this.handelButtonValue.bind(this);
    }
     handelButtonValue(){
      var elem = Math.floor(Math.random()*(100-1)+1);
      return(<button value={elem}>{elem}</button>);
    }
    
    render(){
        return(
            <div className="button-field-wrapper">
              <div>
                {this.handelButtonValue()}
                <button>{this.handelButtonValue()}</button>
                <button>{this.handelButtonValue()}</button>
              </div>
              <div>
                <button>{this.handelButtonValue()}</button>
                <button>{this.handelButtonValue()}</button>
                <button>{this.handelButtonValue()}</button>
              </div>
              <div>
                <button>{this.handelButtonValue()}</button>
                <button>{this.handelButtonValue()}</button>
                <button>{this.handelButtonValue()}</button>
              </div>
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

export default connect(mapStateToProps)(Three);