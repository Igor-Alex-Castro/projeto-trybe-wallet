import PropTypes from 'prop-types';
import React from 'react';

class FormAlteracao extends React.Component {
  render() {
    const { value, onHandleChange,
      description, siglas, onClickDespesas, method, text, tag } = this.props;
    return (
      <form className="container-form">
        <label htmlFor="value-input">
          Valor:
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
          Descrição:
          <input
            id="description-input"
            data-testid="description-input"
            type="text"
            name="description"
            value={ description }
            onChange={ onHandleChange }
          />
        </label>
        <label htmlFor="select-sigla">
          Moeda:
          <select
            name="currency"
            data-testid="currency-input"
            onChange={ onHandleChange }
            id="select-sigla"
            defaultValue={ siglas.map((sigla) => (sigla === value)) }
          >
            { siglas.map((sigla) => (
              <option
                key={ sigla }
                value={ sigla }
              >
                {sigla}

              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          <select
            name="method"
            id="method"
            onChange={ onHandleChange }
            data-testid="method-input"
            defaultValue={ method === value }
          >
            <option
              value="Dinheiro"

            >
              Dinheiro

            </option>
            <option
              value="Cartão de crédito"

            >
              Cartão de crédito

            </option>
            <option
              value="Cartão de débito"

            >
              Cartão de débito

            </option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            name="tag"
            id="tag"
            onChange={ onHandleChange }
            data-testid="tag-input"

          >
            <option
              value="Alimentação"
              selected={ tag === 'Alimentação' }
            >
              Alimentação

            </option>
            <option
              value="Lazer"
              selected={ tag === 'Lazer' }
            >
              Lazer

            </option>
            <option
              value="Trabalho"
              selected={ tag === 'Trabalho' }
            >
              Trabalho

            </option>
            <option
              value="Transporte"
              selected={ tag === 'Transporte' }
            >
              Transporte

            </option>
            <option value="Saúde" selected={ tag === 'Saúde' }>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          id="button-despesas"
          onClick={ onClickDespesas }
        >
          {text}
        </button>
      </form>
    );
  }
}
FormAlteracao.propTypes = {
  value: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  siglas: PropTypes.arrayOf(PropTypes.string).isRequired,
  method: PropTypes.string.isRequired,
  // currency: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClickDespesas: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default FormAlteracao;
