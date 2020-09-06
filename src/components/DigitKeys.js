import React from 'react'
import { connect } from 'react-redux'
import DigitKey from './DigitKey'

const DigitKeys = () => (
    <div className="digit-keys">
        <div className="tr">
            <DigitKey text="7" />
            <DigitKey text="8" />
            <DigitKey text="9" />
        </div>
        <div className="tr">
            <DigitKey text="4" />
            <DigitKey text="5" />
            <DigitKey text="6" />
        </div>
        <div className="tr">
            <DigitKey text="1" />
            <DigitKey text="2" />
            <DigitKey text="3" />
        </div>
        <div className="tr">
            <DigitKey text="0" />
            <DigitKey text="." />
        </div>
    </div>
)

export default connect()(DigitKeys)