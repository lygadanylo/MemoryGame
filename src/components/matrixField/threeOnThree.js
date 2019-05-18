import React, {Component} from "react";
import { connect } from "react-redux";

class Three extends Component {
    constructor(props){
        super(props);
        this.props={};
    }
    render(){
        return(
            <div className="button-field-wrapper">
              <div>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <div>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <div>
                <button></button>
                <button></button>
                <button></button>
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