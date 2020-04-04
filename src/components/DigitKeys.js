import React from 'react'
import { connect } from 'react-redux'

const DigitKeys = (props) => (
    <div>
        <p>i'm DigitKeys</p>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(DigitKeys)