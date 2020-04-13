import React from 'react'
import { connect } from 'react-redux'
import OperationalKey from './OperationalKey'

const OperationalKeys = () => (
    <div className="operational-keys">
        <OperationalKey text="AC" />
        <OperationalKey text="±" />
        <OperationalKey text="%" />
    </div>
)

export default connect()(OperationalKeys)