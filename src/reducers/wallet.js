// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  edit: null,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'FECTH_CORRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'ADD_DEPESAS':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'REMOVE_DEPESA':
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload),
    };
  case 'EDIT_DESPESA':
    // console.log('EDIT_DESPESA', action.payload);
    return {
      ...state,
      edit: action.payload,
    };
  case 'SALVE_EDIT':
    console.log('SALVE_EDIT', action.payload);
    console.log(state.edit.id);
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        console.log('case1:', expense.id, action.payload.id);
        console.log('case2:', expense.id, state.edit.id);
        if (expense.id === state.edit.id) {
          // console.log('SALVE_EDIT', expense);
          // console.log(expense.id, action.payload.value);
          expense.value = action.payload.value;
          expense.description = action.payload.description;
          expense.currency = action.payload.currency;
          expense.method = action.payload.method;
          expense.tag = action.payload.tag;
        }
        return expense;
      }),
      edit: null,
    };
  default:
    return state;
  }
}
export default wallet;
