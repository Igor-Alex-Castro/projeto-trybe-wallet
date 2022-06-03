import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fecthApiCorrencies, addDepesas, removeDepesa,
  editDispesa, salvarEdit } from '../../actions';
import Header from '../../componentes/Header';
import FormAlteracao from '../FormeAlteracao/FormAlteracao';
import FormInclusao from '../FormInclusao/FormInclusao';
import './Wallet.css';
import imgEdit from '../images/editar.png';
import imgExcluir from '../images/excluir.png';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  async componentDidMount() {
    const { addListCorrices } = this.props;
    await addListCorrices();
  }

  onClickDespesas = async () => {
    const { listDespesas, addListCorrices } = this.props;
    const exchangeRates = await addListCorrices();
    this.setState((prev) => ({ ...prev, id: prev.id + 1, exchangeRates }));
    listDespesas(this.state);
    this.setState((prev) => ({ ...prev, value: '', description: '' }));
  }

  onClickAlterar = async () => {
    const { dispachSalvarEdit } = this.props;
    await dispachSalvarEdit(this.state);
  };

  onHandleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  buttonEdit = async (event, expense) => {
    const { dispachEditDespesa } = this.props;

    await dispachEditDespesa(expense);
    this.prencheInput();
  }

  prencheInput = () => {
    const { edit } = this.props;
    this.setState({
      value: edit.value,
      description: edit.description,
      currency: edit.currency,
      tag: edit.currency,
      method: edit.method,
    });
  }

  render() {
    const { siglas, listExpenses, removeItem, edit } = this.props;
    const { value, description, method, tag, currency } = this.state;
    console.log(edit);
    return (
      <div className="all-containter-wallet">
        <Header />
        { edit ? <FormAlteracao
          value={ value }
          onHandleChange={ this.onHandleChange }
          description={ description }
          siglas={ siglas }
          currency={ currency }
          method={ method }
          tag={ tag }
          onClickDespesas={ this.onClickAlterar }
          text="Editar despesa"
        />
          : (
            <FormInclusao
              value={ value }
              onHandleChange={ this.onHandleChange }
              description={ description }
              siglas={ siglas }
              method={ method }
              tag={ tag }
              onClickDespesas={ this.onClickDespesas }
              text="Adicionar"
              currency={ currency }
            />
          )}
        <div className="container-table box">

          <table className="table" id="my_table">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Tag</th>
                <th>Método de pagamento</th>
                <th>Valor</th>
                <th>Moeda</th>
                <th>Câmbio utilizado</th>
                <th>Valor convertido</th>
                <th>Moeda de conversão</th>
                <th>Editar/Excluir</th>
              </tr>
            </thead>
            <tbody>
              {
                listExpenses.length > 0 && listExpenses.map((expense) => (
                  <tr key={ expense.id }>
                    <td className="td-descripion">{expense.description !== ""? expense.description : "---"}</td>
                    <td>{expense.tag}</td>
                    <td>{expense.method}</td>
                    <td>{Number(expense.value).toFixed(2)}</td>
                    <td>{expense.exchangeRates[expense.currency].name}</td>
                    <td>
                      {Number(expense
                        .exchangeRates[expense.currency].ask).toFixed(2)}

                    </td>
                    <td>
                      {((Number(expense
                        .exchangeRates[expense.currency]
                        .ask)) * Number(expense.value)).toFixed(2)}

                    </td>

                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="edit-btn"
                        onClick={ (event) => this.buttonEdit(event, expense) }
                        className="button-edit"
                      >
                        <img src={ imgEdit } width="20px" alt="buttao-edit" />

                      </button>
                      <button
                        type="button"
                        data-testid="delete-btn"
                        onClick={ () => removeItem(expense.id) }
                        className="button-excluir"
                      >
                        <img src={ imgExcluir } width="20px" alt="buttao-excluir" />

                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>);
  }
}
const mapStateToProps = (state) => ({
  siglas: state.wallet.currencies,
  listExpenses: state.wallet.expenses,
  edit: state.wallet.edit,
});

const mapDispatchToProps = (dispatch) => ({
  addListCorrices: () => dispatch(fecthApiCorrencies()),
  listDespesas: (despesas) => dispatch(addDepesas(despesas)),
  removeItem: (id) => dispatch(removeDepesa(id)),
  dispachEditDespesa: (dispesa) => dispatch(editDispesa(dispesa)),
  dispachSalvarEdit: (despesaEdit) => dispatch(salvarEdit(despesaEdit)),

});

Wallet.propTypes = {
  addListCorrices: PropTypes.func.isRequired,
  siglas: PropTypes.arrayOf(PropTypes.string).isRequired,
  listDespesas: PropTypes.func.isRequired,
  listExpenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
  removeItem: PropTypes.func.isRequired,
  dispachEditDespesa: PropTypes.func.isRequired,
  dispachSalvarEdit: PropTypes.func.isRequired,
  edit: PropTypes.shape(PropTypes.string),

};
Wallet.defaultProps = {
  edit: { },
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
