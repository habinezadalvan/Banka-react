import React, { Component, Fragment } from "react";

export default class Login extends Component {
  render() {
    return (
      <Fragment>
        <section id="main-area">
          <div class="non-slider">
            <div class="backButton">
              <a href="/">
                <i class="fas fa-angle-left"></i>
              </a>
            </div>
            <div class="login" id="userLogin">
              <h2>Login form</h2>
              <form action="/logindash" id="loginFormAtt">
                <div class="loginInput">
                  <input
                    type="email"
                    name=""
                    required=""
                    placeholder="Email"
                    id="loginEmailField"
                  />
                </div>
                <div class="loginInput">
                  <input
                    type="password"
                    id="loginPasswordField"
                    name=""
                    placeholder="Password"
                    required=""
                    id="loginPasswordField"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}"
                  />
                </div>
                <div id="409" class="signupconflictmsg"></div>
                <input
                  type="submit"
                  value="Login"
                  id="loginButton"
                  onclick="loginSubmitFunction()"
                />
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
