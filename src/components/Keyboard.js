import React from 'react'
import { connect } from 'react-redux'
import DigitKeys from './DigitKeys'
import OperationalKeys from './OperationalKeys'
import OperatorKeys from './OperatorKeys'


const Keyboard = () => (
    <div className="keyboard" id="table">
        <OperationalKeys />
        <DigitKeys />
        <OperatorKeys />
    </div >
)

export default connect()(Keyboard)