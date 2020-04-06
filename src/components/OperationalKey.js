import React from 'react'
import { connect } from 'react-redux'

const OperationalKey = (props) => (
    <div>
        <button className="operational-key"
            onClick={(e) => {
                e.preventDefault()
                console.log(e.target.innerText)
                switch (e.target.innerText) {
                    case "AC": return props.dispatch(ac())
                    case "C": return props.dispatch(c())
                    case "±": return props.dispatch(sign())
                    case "%": return props.dispatch(precent())
                    default:
                        break;
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

export default connect()(OperationalKey)