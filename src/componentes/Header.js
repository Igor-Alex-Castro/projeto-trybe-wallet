import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {
  constTotal = () => {
    const { expensesList } = this.props;
    const total = expensesList.reduce((acumulador, valor) => {
      const moeda = (valor.exchangeRates[valor.currency].ask);
      return acumulador + Number(valor.value) * moeda;
    }, 0);

    return Number(total).toFixed(2);
    // console.log(expensesList);
  }

  render() {
    const { emailProps } = this.props;
    return (
      <div className="all-conatiner-info">
        <h1 className="title-wallet">TrybeWallet</h1>
        <div className="info-left">
          <p
            data-testid="email-field"
            className="div-email"
          >
            email:
            {' '}
            {emailProps || 'email@gmail'}

          </p>

          <div data-testid="total-field" className="div-field">{this.constTotal()}</div>
          <div data-testid="header-currency-field" className="div-curreny">BRL</div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    emailProps: state.user.email,
    expensesList: state.wallet.expenses,
  };
}
Header.propTypes = {
  emailProps: PropTypes.string.isRequired,
  expensesList: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired)
    .isRequired).isRequired,
};
export default connect(mapStateToProps, null)(Header);
