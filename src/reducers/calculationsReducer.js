// Expenses Reducer

import { decimalPoint } from "../actions/calculations";

const calculationDefaultState = {
  screenText: "0",
  memoryText: undefined,
  operator: undefined
  //,operatorKeys:undefined
};

export default (state = calculationDefaultState, action) => {
  switch (action.type) {
    case 'PRECENT':
    case 'SIGN':
    case 'AC':
    case 'C':
    case 'DECIMAL-POINT':
      return calculationResponse(state, action)
  }

  if (state.operator == undefined) {
    switch (action.type) {
      case 'PLUS':
        return {
          ...state,
          operator: "+",
          memoryText: state.screenText
        }
      case 'MINUS':
        return {
          ...state,
          operator: "-",
          memoryText: state.screenText
        }
      case 'DIVIDE':
        return {
          ...state,
          operator: "/",
          memoryText: state.screenText
        }
      case 'MULTIPLY':
        return {
          ...state,
          operator: "*",
          memoryText: state.screenText
        }
      case 'DIGIT_CLICKED':
        if (state.screenText == "0" && state.memoryText == undefined || (state.screenText == state.memoryText))
          return {
            ...state,
            screenText: action.text
          }
        else
          return {
            ...state,
            screenText: state.screenText + action.text
          }
        switch (state.operator) {

        }
      default:
        return state;
    }
  }
  else
    switch (action.type) {
      case 'PLUS':
        return {
          ...state,
          operator: "+"
        }
      case 'MINUS':
        return {
          ...state,
          operator: "-"
        }
      case 'DEVIDE':
        return {
          ...state,
          operator: "/"
        }
      case 'MUILTIPLY':
        return {
          ...state,
          operator: "*"
        }
      case 'DIGIT_CLICKED':
        if (state.screenText == state.memoryText)
          return {
            ...state,
            screenText: action.text
          }
        else
          return {
            ...state,
            screenText: state.screenText + action.text
          }
        switch (state.operator) {

        }
      case 'EQUAL':
        return calculationResponse(state, action)
      default:
        return state;
    }

};

const calculationResponse = (state, action) => {
  const screenNum = Number(state.screenText)
  const memNum = Number(state.memoryText)

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
        screenText: screenNum / 100,
      }
    case 'DECIMAL-POINT':
      if (!state.screenText.includes("."))
        return {
          ...state,
          screenText: state.screenText + "."
        }
      return {
        ...state
      }
  }

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
