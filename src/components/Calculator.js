import React from 'react';
import { connect } from 'react-redux';
import Display from './Display'
import Keyboard from './Keyboard'

const Calculator = () => (
    <div className="calculator">
        <Display />
        <Keyboard />
    </div>
);

export default connect()(Calculator);
