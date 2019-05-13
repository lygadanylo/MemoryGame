import React, {Component} from 'react';
import {connect} from 'react-redux';

class FieldGame extends Component {
    render(){
        return(
            <div>
    {
        console.log(this.props.value)
    }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state
    }
};

export default connect(mapStateToProps)(FieldGame);