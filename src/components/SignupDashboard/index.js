import React, { Component } from "react";
import imagesgg from "../../assets/images/icon.png";

export default class SignupDashboard extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar" id="navbarId">
          <div className="navbar1">
            <span className="open-slide">
              <i
                className="fas fa-bars"
                onClick={() => "showHiddenMenuArea()"}
                id="barsMenu"
              ></i>
            </span>
          </div>
          <div className="navbar2\]">
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
          <a href="#" onClick={() => "showCreateAccountSignup()"}>
            Create Account
          </a>
          <a
            href="#"
            className="viewUsersAccountsClass"
            onClick={() => "ViewBankAccountsSignup()"}
          >
            Bank accounts
          </a>
          <a href="#" onClick={() => "showResetPasswordSignup()"}>
            Reset Password
          </a>
          <a href="../index.html">Logout</a>
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
                <p id="signeduser" className="userprofilepar" />
                <p id="useremail" className="userprofilepar" />
                <br />
                <hr />
                <p id="accNumb" />
              </div>
            </div>
            <div className="sideMenu">
              <ul className="navbar-nav">
                <li id="signup1">
                  <a href="#" onClick={() => "showCreateAccountSignup()"}>
                    <i className="fas fa-plus"></i>
                    &nbsp; Create Account
                  </a>
                </li>
                <li id="signup2">
                  <a
                    href="#"
                    className="viewUsersAccountsClass"
                    onClick={() => "ViewBankAccountsSignup()"}
                  >
                    <i className="fas fa-exchange-alt"></i> &nbsp; Bank accounts
                  </a>
                </li>
                <li id="signup3">
                  <a href="#" onClick={() => "showResetPasswordSignup()"}>
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
            <div className="profileImage"></div>
          </div>
          <div className="main-area-right" id="main-area-rightId">
            <div className="createAccount" id="signupCreateAccount">
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
                  onFocus="createAccountSubmit()"
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
                class="closecreateAccount-icon"
                id="closecreateAccount"
                onClick={() => "closeSignup()"}
              >
                &times;
              </a>
            </div>
            <div class="transactionsPage" id="transactionsSignup">
              <div id="accountsListId"></div>
              <div id="transactionsId"> </div>
              <a
                href="#"
                class="closecreateAccount-icon"
                id="closeTransactions"
                onclick="closeSignup()"
              >
                &times;
              </a>
            </div>
            <div className="createAccount" id="restpasswordSignup">
              <h2>Reset Password</h2>
              <form action="" id="">
                <div className="createAccountInput">
                  <input
                    type="password"
                    name=""
                    placeholder="Old password"
                    required=""
                    onChange="onInputPasswordCreateAccount()"
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="password"
                    name=""
                    placeholder="New password"
                    required=""
                    oninput="onInputPasswordCreateAccount()"
                    id="passwordAreaId"
                  />
                </div>
                <div class="createAccountInput">
                  <input
                    type="password"
                    name=""
                    placeholder="Confirm password"
                    required=""
                    oninput="onInputPasswordCreateAccount()"
                  />
                </div>
                <div id="errorMessageCreateAccount" className="errMessage">
                  <p>Password characters should be 6 to 12</p>
                </div>
                <input
                  type="submit"
                  class="submitinput"
                  value="Reset Password"
                  id="createAccountSubmit"
                />
              </form>
              <a
                href="#"
                class="closecreateAccount-icon"
                id="closeResetPassword"
                onclick="closeSignup()"
              >
                &times;
              </a>
            </div>
            <div className="signupDashboard" id="signupDashboardId">
              <div>
                <p id="201signup"></p>
                <span>
                  Banka is a light-weight core banking application that powers
                  banking operations like account creation, customer deposit and
                  withdrawals. This app is meant to support a single bank, where
                  users can signup and create bank accounts online, but must
                  visit the branch to withdraw or deposit money..
                </span>
              </div>
            </div>
            <div id="createdACCnotification" class="createdstaff"></div>
          </div>
        </section>
      </div>
    );
  }
}
