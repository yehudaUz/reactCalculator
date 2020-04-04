import React from 'react';
import { connect } from 'react-redux';
import Display from './Display'
import Keyboard from './Keyboard'

const Calculator = (props) => (
    <div className="calculator">
        <p> {props.test}</p>
        <Display />
        <Keyboard />
    </div>
);

const mapStateToProps = (state) => {
    return {
        test: "calculator testing"
    };
};

export default connect(mapStateToProps)(Calculator);
