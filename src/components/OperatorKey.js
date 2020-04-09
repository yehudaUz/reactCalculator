import React from 'react'
import { connect } from 'react-redux'
import { plus, minus, divide, multiply, equal } from '../actions/calculations'

const OperatorKey = (props) => (
    <div className="operator-key">
        <button
            className={`operator-button-${props.text}`}
            onClick={(e) => {
                e.preventDefault()
                console.log(e.target.innerText)
                switch (e.target.innerText) {
                    case "+": return props.dispatch(plus())
                    case "-": return props.dispatch(minus())
                    case "X": return props.dispatch(multiply())
                    case "÷": return props.dispatch(divide())
                    case "=": return props.dispatch(equal())
                    default: throw new Error("Unknown operator")
                }
            }}>
            {props.text}
        </button>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(OperatorKey)