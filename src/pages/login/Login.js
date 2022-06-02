import PropTypes from 'prop-types';
import React from 'react';
import './login.css';
import { connect } from 'react-redux';
import LoginImg from './login.jpg';
import { addEmail } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDesible: true,
    };
  }

 onHeandleChange = ({ target }) => {
   const { value, name } = target;
   this.setState({
     [name]: value,
   }, () => this.isHabilitButton());
 }

  validEmail = () => {
    const { email } = this.state;
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  validPassword = () => {
    const { password } = this.state;
    const PASSWORD_LENGTH = 6;
    if (password.length >= PASSWORD_LENGTH) {
      return true;
    }
    return false;
  }

  isHabilitButton = () => {
    if (this.validPassword() && this.validEmail()) {
      this.setState((prevState) => ({ ...prevState, isDesible: false }));
    } else {
      this.setState((prevState) => ({ ...prevState, isDesible: true }));
    }
  }

  onClick = () => {
    const { history, addEmailAction } = this.props;
    const { email } = this.state;
    addEmailAction(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDesible } = this.state;
    return (
      <div className="all-container-login">
        <h2 className="title-login">Login</h2>
        <div className="section-login">

          <div className="login-left"><img src={ LoginImg } alt="img login" /></div>
          <form className="login-rigth">
            <label htmlFor="email">
              Email:
              <input
                data-testid="email-input"
                name="email"
                id="email"
                type="email"
                value={ email }
                onChange={ this.onHeandleChange }
              />
            </label>
            <label htmlFor="passsword">
              Senha:
              <input
                data-testid="password-input"
                name="password"
                id="passwoerd"
                type="password"
                value={ password }
                onChange={ this.onHeandleChange }
              />
            </label>
            <div className="button-center">
              <button
                id="submit"
                type="button"
                disabled={ isDesible }
                onClick={ this.onClick }
              >
                Entrar
              </button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  addEmailAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmailAction: (email) => dispatch(addEmail(email)),
});
export default connect(null, mapDispatchToProps)(Login);
