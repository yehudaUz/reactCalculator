import React from 'react'
import { connect } from 'react-redux'
import ScreenText from './ScreenText'
//import { json } from 'body-parser'

const Display = (props) => {
    //console.log(props)
    return (
        <div className="display" id="display">
            {/* <p>Display {}</p> */}
            <ScreenText />
        </div>
    )
}

const mapToProps = (state) => {
    return state
}

export default connect(mapToProps)(Display)