import React from 'react'
import { connect } from 'react-redux'

const OperationalKey = (props) => (
    <div>
        <button className="operational-key"
            onClick={(e) => {
                e.preventDefault()
                console.log(e.target.innerText)
                // switch (e.target.innerText) {
                //     case "+": return props.dispatch(plus())
                //     case "-": return props.dispatch(minus())
                //     case "X": return props.dispatch(multiply())
                //     case "÷": return props.dispatch(divide())
                //     default:
                //         break;
                // }

            }}>
            {props.text}
        </button>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect()(OperationalKey)