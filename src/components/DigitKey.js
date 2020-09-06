import React from 'react'
import { connect } from 'react-redux'
import { digitKeyClicked, decimalPoint } from '../actions/calculations'

const DigitKey = (props) => {
    return (
        <div className="digit-key" className="td" >
            <button
                className={`digit-key-button-${props.text}`}
                onClick={(e) => {
                    e.preventDefault()
                    if (e.target.innerText == ".")
                        props.dispatch(decimalPoint())
                    else
                        props.dispatch(digitKeyClicked(e.target.innerText))
                }}>
                {props.text}
            </button>
        </div >
    )
}

export default connect()(DigitKey)