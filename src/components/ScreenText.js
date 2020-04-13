import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'

const ScreenText = (props) => {

    $('#screen-text').on('DOMSubtreeModified', function () {
        fitTextToDiv(props.state.screenText)
    })

    const fitTextToDiv = (text) => {
        if (text.toString().length < 4 && document.getElementById("screen-text"))
            document.getElementById("screen-text").style = "";
        else
            while (document.getElementById("display") && document.getElementById("screen-text") &&
                document.getElementById("display").offsetWidth * 0.7 <= document.getElementById("screen-text").offsetWidth) {
                let sizeInPx = document.getElementById("screen-text").style.fontSize ? document.getElementById("screen-text").style.fontSize : getComputedStyle(document.getElementById("display")).getPropertyValue('font-size')
                let sizeInNumbers = Number(sizeInPx.substring(0, sizeInPx.length - 2))
                let newSize = (sizeInNumbers - 1) + "px"
                document.getElementById("screen-text").style.fontSize = newSize
                console.log("nes size: " + newSize)
            }
    }

    return (
        <div className="screen-text" >
            <span id="screen-text">{props.state.screenText}</span>
        </div>
    )
}

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(ScreenText)