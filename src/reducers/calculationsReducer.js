// Expenses Reducer

const calculationDefaultState = {
  screenText: "0",
  memoryText: undefined,
  operator: undefined
  //,operatorKeys:undefined
};

export default (state = calculationDefaultState, action) => {
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
      if (state.operator == undefined)
        return {
          ...state,
          screenText: state.screenText + action.text
        }
      switch (state.operator) {
        
      }
    default:
      return state;
  }
};
