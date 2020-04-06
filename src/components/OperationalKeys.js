import React from 'react'
import { connect } from 'react-redux'
import OperationalKey from './OperatorKey'

const OperationalKeys = (props) => (
    <div>
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