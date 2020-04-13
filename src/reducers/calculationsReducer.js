const calculationDefaultState = {
  screenText: "0",
  memoryText: undefined,
  operator: undefined,
  c_Ac: "AC",
  operatorLastClicked: false
};

export default (state = calculationDefaultState, action) => {
  //immidiate actions, check and add to memory
  switch (action.type) {
    case 'PRECENT':
    case 'SIGN':
    case 'AC':
    case 'C':
    case 'DECIMAL-POINT':
      return calculationResponse(state, action)
  }

  //adding operator and last number to memory for future calc / adding futre digit of calc to screen
  if (state.operator == undefined) {
    switch (action.type) {
      case 'PLUS':
        return {
          ...state,
          operator: "+",
          memoryText: state.screenText,
          operatorLastClicked: true
        }
      case 'MINUS':
        return {
          ...state,
          operator: "-",
          memoryText: state.screenText,
          operatorLastClicked: true
        }
      case 'DIVIDE':
        return {
          ...state,
          operator: "/",
          memoryText: state.screenText,
          operatorLastClicked: true
        }
      case 'MULTIPLY':
        return {
          ...state,
          operator: "*",
          memoryText: state.screenText,
          operatorLastClicked: true
        }
      case 'DIGIT_CLICKED':
        if (state.screenText == "0" && state.memoryText == undefined || (state.screenText == state.memoryText))
          return {
            ...state,
            screenText: action.text,
            c_Ac: "C",
            operatorLastClicked: false
          }
        else
          return {
            ...state,
            screenText: state.screenText + action.text,
            operatorLastClicked: false
          }
        switch (state.operator) {

        }
      default:
        return state;
    }
  }
  //imidiate action for "double tap" (example 9++ = 18, ++ = 36..)
  else if (state.screenText != undefined && state.memoryText != undefined && state.operator != undefined &&
    (action.type == 'PLUS' || action.type == 'MINUS' || action.type == 'MULTIPLY' || action.type == 'DIVIDE'))
    return calculationResponse(state, action, true)
  //adding operator to memory or digit to screen
  else
    switch (action.type) {
      case 'PLUS':
        return {
          ...state,
          operator: "+",
          operatorLastClicked: true
        }
      case 'MINUS':
        return {
          ...state,
          operator: "-",
          operatorLastClicked: true
        }
      case 'DIVIDE':
        return {
          ...state,
          operator: "/",
          operatorLastClicked: true
        }
      case 'MULTIPLY':
        return {
          ...state,
          operator: "*",
          operatorLastClicked: true
        }
      case 'DIGIT_CLICKED':
        // if (state.screenText == state.memoryText && (!state.screenText || !(state.screenText.slice(-1) == action.text.slice(-1)))
        if (state.operatorLastClicked || state.screenText == "0")
          return {
            ...state,
            screenText: action.text,
            c_Ac: "C",
            operatorLastClicked: false
          }
        else
          return {
            ...state,
            // memoryText: state.screenText,
            screenText: state.screenText + action.text,
            c_Ac: "C",
            operatorLastClicked: false
          }
        switch (state.operator) {

        }
      case 'EQUAL':
        return calculationResponse(state, action)
      default:
        return state;
    }

};

const calculationResponse = (state, action, isTwoTimesOperatorClicked) => {
  const screenNum = Number(state.screenText)
  const memNum = Number(state.memoryText)

  //immidiate actions 
  switch (action.type) {
    case 'PRECENT':
      return {
        ...state,
        screenText: screenNum / 100
      }
    case 'SIGN':
      return {
        ...state,
        screenText: -screenNum,
      }
    case 'AC':
      return {
        ...calculationDefaultState
      }
    case 'C':
      return {
        ...state,
        screenText: "0",
        c_Ac: "AC"
      }
    case 'DECIMAL-POINT':
      if (!state.screenText.includes("."))
        return {
          ...state,
          screenText: state.screenText + ".",
          c_Ac: "C"
        }
      return {
        ...state
      }
  }

  //++ -- .... double tap
  if (isTwoTimesOperatorClicked) {
    let sign;
    switch (action.type) {
      case 'PLUS': sign = "+"
        break;
      case 'MINUS': sign = "-"
        break;
      case 'DIVIDE': sign = "/"
        break;
      case 'MULTIPLY': sign = "*"
        break;
    }

    switch (state.operator) {
      case '+':
        return {
          operatorLastClicked: true,
          operator: sign,
          screenText: screenNum + memNum,
          memoryText: screenNum + memNum
        }
      case '-':
        return {
          operatorLastClicked: true,
          operator: sign,
          screenText: memNum - screenNum,
          memoryText: memNum - screenNum
        }
      case '/':
        return {
          operatorLastClicked: true,
          operator: sign,
          screenText: memNum / screenNum,
          memoryText: memNum / screenNum
        }
      case '*':
        return {
          operatorLastClicked: true,
          operator: sign,
          screenText: screenNum * memNum,
          memoryText: screenNum * memNum
        }
    }
  }
  //all normal calculation
  else
    switch (state.operator) {
      case '+':
        return {
          operator: undefined,
          screenText: screenNum + memNum,
          memoryText: screenNum + memNum
        }
      case '-':
        return {
          operator: undefined,
          screenText: memNum - screenNum,
          memoryText: memNum - screenNum
        }
      case '/':
        return {
          operator: undefined,
          screenText: memNum / screenNum,
          memoryText: memNum / screenNum
        }
      case '*':
        return {
          operator: undefined,
          screenText: screenNum * memNum,
          memoryText: screenNum * memNum
        }
    }
}
