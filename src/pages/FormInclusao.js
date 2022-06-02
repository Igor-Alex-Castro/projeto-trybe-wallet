import PropTypes from 'prop-types';
import React from 'react';
import './FormInclusao.css';

class FormInclusao extends React.Component {
  render() {
    const { value, onHandleChange,
      description, siglas, onClickDespesas, text } = this.props;
    return (
      <form className="container-form">
        <label htmlFor="value-input">
          Valor
          <input
            id="value-input"
            data-testid="value-input"
            type="number"
            name="value"
            value={ value }
            onChange={ onHandleChange }
            className="value-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <input
            id="description-input"
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ onHandleChange }
            className="description-input"
          />
        </label>
        <label htmlFor="select-sigla">
          Moeda
          <select
            className="select"
            name="currency"
            data-testid="currency-input"
            onChange={ onHandleChange }
            id="select-sigla"
          >
            { siglas.map((currency) => (
              <option key={ currency } value={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método
          <select
            name="method"
            id="method"
            onChange={ onHandleChange }
            data-testid="method-input"
            className="select"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            name="tag"
            id="tag"
            onChange={ onHandleChange }
            data-testid="tag-input"
            className="select"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          id="button-despesas"
          className="button-despesas"
          onClick={ onClickDespesas }
        >
          {text}
        </button>
      </form>
    );
  }
}
FormInclusao.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  siglas: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClickDespesas: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default FormInclusao;
