import React from 'react'
import { connect } from 'react-redux'
import { digitKeyClicked, decimalPoint } from '../actions/calculations'
import $ from 'jquery'


const DigitKey = (props) => {
    return (
        <div className="digit-key" className="td" >
            <button
                className={`digit-key-button-${props.text}`}
                onClick={(e) => {
                    e.preventDefault()
                  //  console.log(e.target.innerText)
                    // let width;
                    // document.getElementById("display") ? width = document.getElementById("display").offsetWidth : ""
                    // //style={{ fontSize: width / 12 }}
                    // console.log(width)
                    //console.log(document.)
                    // if ($(this).val().length > 50) {
                    //     alert('more than 50 characters');
                    // }
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
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(DigitKey)