import React, {Component} from 'react';
import {connect} from 'react-redux';

class Level extends Component {
    constructor(props){
        super(props);
        this.state = { inputValue: " " }
        this.handelClick = this.handelClick.bind(this);
    }
    handelClick(e) {
        this.setState({inputValue: e.target.value});
        const inputsV =e.target.value;
        this.props.dispatch({
            type: 'BUTTON_VALUE',
            payload: inputsV
        });
    }
    render(){
        return(
            <div>
                <button value = "2" onClick={this.handelClick}>2 x 2</button>
                {/* {
                    console.log(this.props.value)
                } */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state
    }
};

export default connect(mapStateToProps)(Level);