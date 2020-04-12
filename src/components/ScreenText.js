import React from 'react'
import { connect } from 'react-redux'

const ScreenText = (props) => {
    console.log(props)
    const fitTextToDiv = () => {
        while (document.getElementById("display") && document.getElementById("screen-text") &&
            document.getElementById("display").offsetWidth * 0.7 <= document.getElementById("screen-text").offsetWidth) {
            // console.log(getComputedStyle(document.getElementById("display")).getPropertyValue('font-size'))
            // document.getElementById("screen-text").style.fontSize = (Number(getComputedStyle(document.getElementById("display")).getPropertyValue('font-size')) - 1) + "px";
            let sizeInPx = document.getElementById("screen-text").style.fontSize ? document.getElementById("screen-text").style.fontSize : getComputedStyle(document.getElementById("display")).getPropertyValue('font-size')
            let sizeInNumbers = Number(sizeInPx.substring(0, sizeInPx.length - 2))
            let newSize = (sizeInNumbers - 1) + "px"
            document.getElementById("screen-text").style.fontSize = newSize
            console.log(newSize)
        }
    }

    return (
        <div className="screen-text" >
            <span id="screen-text">{props.state.screenText}</span>
            {fitTextToDiv()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ScreenText)