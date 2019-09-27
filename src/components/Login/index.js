import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/login";
import { ToastContainer, toast } from "react-toastify";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onChange = ({ target }) => {
    const input = {
      [target.name]: target.value
    };
    this.setState(prevState => ({
      ...prevState,
      ...input
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { error } = Joi.validate(this.state, schema);

    if (error) {
      const errors = {};
      for (let obj of error.details) {
        errors[obj.path[0]] = obj.message.replace(/"/g, "");
      }
      Object.keys(errors).forEach(key => {
        toast.error(errors[key]);
      });
    }
    this.props.loginAction(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 200) {
      nextProps.history.push("/logindash");
    } else toast.error(nextProps.error.message);
  }
  render() {
    return (
      <Fragment>
        <section id="main-area">
          <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className="non-slider">
            <div className="backButton">
              <a href="/">
                <i className="fas fa-angle-left"></i>
              </a>
            </div>
            <div className="login" id="userLogin">
              <h2>Login form</h2>
              <form
                action="/logindash"
                id="loginFormAtt"
                onSubmit={this.onSubmit}
              >
                <div className="loginInput">
                  <input
                    type="email"
                    name="email"
                    required=""
                    placeholder="Email"
                    id="loginEmailField"
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                </div>
                <div className="loginInput">
                  <input
                    type="password"
                    id="loginPasswordField"
                    name="password"
                    placeholder="Password"
                    required=""
                    id="loginPasswordField"
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                </div>
                <div id="409" className="signupconflictmsg"></div>
                <input type="submit" value="Login" id="loginButton" />
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const schema = {
  email: Joi.string()
    .required()
    .label("Email"),
  password: Joi.string()
    .required()
    .label("Password")
};
const mapStateToProps = ({
  user: { data, message, status, error, logged }
}) => ({ data, message, status, error, logged });

const mapDispatchToProps = {
  loginAction
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
