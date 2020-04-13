import React from 'react'
import { connect } from 'react-redux'
import { ac, c, sign, precent } from '../actions/calculations'

const OperationalKey = (props) => (
    <div>
        <button className="operational-key td"
            onClick={(e) => {
                e.preventDefault()
                console.log(props)
                switch (e.target.innerText) {
                    case "AC": return props.dispatch(ac())
                    case "C": return props.dispatch(c())
                    case "±": return props.dispatch(sign())
                    case "%": return props.dispatch(precent())
                    default:
                        break;
                }

            }}>
            {(props.text == "AC" && props.state.c_Ac) || props.text}
        </button>
    </div>
)

const mapStateToProps = (state) => (state)

export default connect(mapStateToProps)(OperationalKey)