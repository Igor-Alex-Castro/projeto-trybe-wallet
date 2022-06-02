// Coloque aqui suas actions
const addEmail = (payload) => ({
  type: 'ADD_EMAIL', payload,
});

const addDepesas = (payload) => ({
  type: 'ADD_DEPESAS', payload,
});
const removeDepesa = (payload) => ({
  type: 'REMOVE_DEPESA', payload,
});
const editDispesa = (payload) => ({
  type: 'EDIT_DESPESA', payload,
});

const fecthCorrencies = (payload) => ({
  type: 'FECTH_CORRENCIES', payload,
});

const salvarEdit = (payload) => ({
  type: 'SALVE_EDIT', payload,
});
const fecthApiCorrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((currencies) => {
    const siglas = Object.keys(currencies);
    const siglasFiltradas = siglas.filter((sigla) => sigla !== 'USDT');
    dispatch(fecthCorrencies(siglasFiltradas));
    // return dispatch(fecthCorrencies(currencies));
    return currencies;
  });

export { addEmail, fecthApiCorrencies, addDepesas, removeDepesa, editDispesa, salvarEdit };
