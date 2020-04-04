import React from 'react'
import { connect } from 'react-redux'

const OperationalKeys = (props) => (
    <div>
        <p>i'm OperationalKeys</p>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(OperationalKeys)