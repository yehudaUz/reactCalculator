import React from 'react'
import { connect } from 'react-redux'

const ScreenText = (props) => {
    console.log(props)
    return (
        <div className="screen-text">
            {props.state.screenText}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ScreenText)