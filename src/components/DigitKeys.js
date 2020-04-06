import React from 'react'
import { connect } from 'react-redux'
import DigitKey from './DigitKey'

const DigitKeys = (props) => (
    <div className="digit-keys">
       <DigitKey text="1"/>
       <DigitKey text="2"/>
       <DigitKey text="3"/>
       <DigitKey text="4"/>
       <DigitKey text="5"/>
       <DigitKey text="6"/>
       <DigitKey text="7"/>
       <DigitKey text="8"/>
       <DigitKey text="9"/>
       <DigitKey text="0"/>
       <DigitKey text="."/>
    </div>
)

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(DigitKeys)