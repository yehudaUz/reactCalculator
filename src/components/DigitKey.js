import React from 'react'
import { connect } from 'react-redux'
import { digitKeyClicked } from '../actions/calculations'

const DigitKey = (props) => (
    <div>
        <button className="digit-key"
            onClick={(e) => {
                e.preventDefault()
                console.log(e.target.innerText)
                props.dispatch(digitKeyClicked(e.target.innerText))
            }}>
            {props.text}
        </button>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(DigitKey)