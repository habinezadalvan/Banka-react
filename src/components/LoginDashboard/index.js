import React, { Component, Fragment } from "react";
import imagesgg from "../../assets/images/icon.png";


export default class LoginDashboard extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar" id="navbarId">
          <div className="navbar1">
            <span className="open-slide">
              <i
                className="fas fa-bars"
                onClick={() => "showHiddenMenuArea()"}
                id="barsMenu"
              ></i>
            </span>
            <ul className="navbar-nav"></ul>
          </div>
          <div className="navbar2">
            <span className="banka">
              <i className="fas fa-university"></i>
              <span>Banka</span>
            </span>
          </div>
        </nav>
        <div id="hidden-nav-bar" className="side-nav-bar">
          <a
            href="#"
            className="close-icon"
            onClick={() => "closeHiddenMenuArea()"}
          >
            &times;
          </a>
          <a href="#" onClick={() => "showCreateAccountLogin()"}>
            Create Account
          </a>
          <a
            href="#"
            className="viewUsersAccountsClass"
            onClick={() => "viewBankAccountLogin()"}
          >
            Bank accounts
          </a>
          <li>
            <a href="#" onClick={() => "showResetPasswordLogin()"}>
              Reset Password
            </a>
          </li>
          <a href="/">Logout</a>
        </div>
        <section id="main-areaPage">
          <div className="main-area-left" id="main-area-leftId">
            <div className="profileDiv">
              <div className="profileTitle">
                <h2>User profile</h2>
              </div>
              <div className="profile">
                <img
                  src={imagesgg}
                  alt="profile"
                  width="100px"
                  height="100px"
                />
                <p id="loggedinuser" className="userprofilepar">
                  {" "}
                </p>
                <p id="loggedinuseremail" className="userprofilepar">
                  {" "}
                </p>
                <b />
                <hr />
                <p id="accNumb"> </p>
              </div>
            </div>
            <div className="sideMenu">
              <ul className="navbar-nav">
                <li id="login1">
                  <a href="#" onClick={() => "showCreateAccountLogin()"}>
                    <i className="fas fa-plus"></i> &nbsp; Create Account
                  </a>
                </li>
                <li id="login2">
                  <a
                    href="#"
                    className="viewUsersAccountsClass"
                    onClick={() => "viewBankAccountLogin()"}
                  >
                    <i className="fas fa-exchange-alt"></i> &nbsp; Bank accounts
                  </a>
                </li>
                <li id="login3">
                  <a href="#" onClick={() => "showResetPasswordLogin()"}>
                    {" "}
                    <i className="fas fa-cog"></i> &nbsp; Reset Password
                  </a>
                </li>
                <li>
                  <a href="/" onClick={() => "loginFunction()"}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-area-right" id="main-area-rightId">
            <div className="createAccount" id="LoginCreateAccountId">
              <h2>Create Account</h2>
              <form action="" id="userCreateBankAccountId">
                <div className="createAccountInput">
                  <input
                    type="text"
                    placeholder="First Name"
                    id="inputfirstname"
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="text"
                    placeholder="Last Name"
                    id="inputlastname"
                  />
                </div>
                <div className="createAccountInput">
                  <input type="email" placeholder="Email" id="inputemail" />
                </div>
                <div className="createAccountInput">
                  <input
                    type="text"
                    id="inputtype"
                    placeholder="Account type(Savings or Current)"
                    required=""
                    id="inputemail"
                  />
                </div>

                <input
                  type="button"
                  className="submitinput"
                  value="Create Account"
                  onfocus="createAccountSubmit()"
                  id="createAccountSubmitID"
                />
                <br />
                <hr />
                <div id="accmessage" className="successmsg"></div>
                <div
                  className="createAccNotification"
                  id="createAccountNotification"
                >
                  <p>Are you sure you want to create a bank account?</p>
                  <input
                    type="button"
                    value="No"
                    id="createAccValueNO"
                    className="submitinput"
                    onClick={() => "NOclose()"}
                  />
                  <input
                    type="submit"
                    value="YES"
                    id="submitbutton"
                    className="submitinput"
                    onClick={() => "YESclose()"}
                  />
                </div>
              </form>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closecreateAccount"
                onClick={() => "closeLoginPages()"}
              >
                &times;
              </a>
            </div>

            <div className="transactionsPage" id="LoginTransactions">
              <div id="accountsListId"></div>
              <div id="transactionsId"> </div>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closeTransactions"
                onClick={() => "closeLoginPages()"}
              >
                &times;
              </a>
            </div>
            <div className="createAccount" id="Loginrestpassword">
              <h2>Reset Password</h2>
              <form action="" id="userCreateBankAccountId">
                <div className="createAccountInput">
                  <input
                    type="password"
                    name=""
                    required=""
                    placeholder=" Old password"
                    onChange={() => 'onInputPasswordCreateAccount()'}
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="password"
                    name=""
                    placeholder=" New password"
                    required=""
                    onChange={() => 'onInputPasswordCreateAccount()'}
                    id="passwordAreaId"
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="password"
                    name=""
                    placeholder=" Confirm password"
                    required=""
                    onChange={() => 'onInputPasswordCreateAccount()'}
                  />
                </div>
                <div id="errorMessageCreateAccount" className="errMessage">
                  <p>Password characters should be 6 to 12</p>
                </div>
                <input
                  type="submit"
                  className="submitinput"
                  value="Reset Password"
                  id="createAccountSubmit"
                />
              </form>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closeResetPassword"
                onClick={() => "closeLoginPages()"}
              >
                &times;
              </a>
            </div>
            <div className="signupDashboard" id="LoginDashboardId">
              <p id="200login"></p>
              <span>
                Banka is a light-weight core banking application that powers
                banking operations like account creation, customer deposit and
                withdrawals. This app is meant to support a single bank, where
                users can signup and create bank accounts online, but must visit
                the branch to withdraw or deposit money..
              </span>
            </div>
            <div id="createdACCnotification" className="createdstaff"></div>
          </div>
        </section>
      </Fragment>
    );
  }
}
