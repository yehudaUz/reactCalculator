import React from 'react'
import { connect } from 'react-redux'
import DigitKeys from './DigitKeys'
import OperationalKeys from './OperationalKeys'
import OperatorKeys from './OperatorKeys'

const Keyboard = (props) => (
    <div>
        <p>{props.test}</p>
        <DigitKeys />
        <OperatorKeys />
        <OperationalKeys/>
    </div >
)


const mapsToProps = (state) => {
    return {
        test: "keybord testing"
    }
}

export default connect(mapsToProps)(Keyboard)