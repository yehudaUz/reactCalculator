import React from 'react'
import { connect } from 'react-redux'
import ScreenText from './ScreenText'

const Display = () => {
    return (
        <div className="display" id="display">
            <ScreenText />
        </div>
    )
}

const mapToProps = (state) =>(state)

export default connect(mapToProps)(Display)