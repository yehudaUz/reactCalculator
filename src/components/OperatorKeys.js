import React from 'react'
import { connect } from 'react-redux'

const OperatorKeys = (props) => (
    <div>
        <p>i'm OperatorKeys</p>
    </div>
)

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect()(OperatorKeys)