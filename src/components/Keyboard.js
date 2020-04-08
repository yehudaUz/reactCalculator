import React from 'react'
import { connect } from 'react-redux'
import DigitKeys from './DigitKeys'
import OperationalKeys from './OperationalKeys'
import OperatorKey from './OperatorKey'
import OperatorKeys from './OperatorKeys'


const Keyboard = (props) => (
    <div className="keyboard"> 
        {/* <p>{props.test}</p> */}
        <OperationalKeys/>
        <DigitKeys />
        <OperatorKeys />
    </div >
)


const mapsToProps = (state) => {
    return {
        test: "keybord testing"
    }
}

export default connect(mapsToProps)(Keyboard)