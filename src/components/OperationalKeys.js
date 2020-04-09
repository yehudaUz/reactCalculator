import React from 'react'
import { connect } from 'react-redux'
import OperationalKey from './OperationalKey'

const OperationalKeys = (props) => (
    <div className="operational-keys">
        <OperationalKey text="AC" />
        <OperationalKey text="±" />
        <OperationalKey text="%" />
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(OperationalKeys)