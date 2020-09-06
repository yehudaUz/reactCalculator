import React from 'react'
import { connect } from 'react-redux'
import OperatorKey from './OperatorKey'

const OperatorKeys = () => (
    <div className="operator-keys td">
        <OperatorKey text="÷" />
        <OperatorKey text="X" />
        <OperatorKey text="-" />
        <OperatorKey text="+" />
        <OperatorKey text="=" />
    </div>
)

export default connect()(OperatorKeys)