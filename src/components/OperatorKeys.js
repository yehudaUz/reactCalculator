import React from 'react'
import { connect } from 'react-redux'
import OperatorKey from './OperatorKey'

const OperatorKeys = (props) => (
    <div className="operator-keys">
        <OperatorKey text="÷" />
        <OperatorKey text="X" />
        <OperatorKey text="-" />
        <OperatorKey text="+" />
        <OperatorKey text="=" />
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(OperatorKeys)