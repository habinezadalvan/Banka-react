import React, { Component } from "react";
import imagesgg from "../../assets/images/icon.png";

export default class StaffDashboard extends Component {
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
          <a href="#" onClick={() => "showCreateAccount()"}>
            Credit
          </a>
          <a href="#" onClick={() => "showDebitPage()"}>
            Debit
          </a>
          <a
            className="allUsersAccounts"
            href="#"
            onClick={() => "showTransaction()"}
          >
            Users' Accounts
          </a>
          <li>
            <a href="#" onClick={() => "showResetPassword()"}>
              Reset Password
            </a>
          </li>
          <a href="/">Logout</a>
        </div>
        <section id="main-areaPage">
          <div className="main-area-left" id="main-area-leftId">
            <div className="profileDiv">
              <div className="profileTitle">
                <h2>Staff</h2>
              </div>
              <div className="profile">
                <img
                  src={imagesgg}
                  alt="profile"
                  width="80px"
                  height="80px"
                />
                <p id="loggedstaff" className="userprofilepar">
                  {" "}
                </p>
                <p id="loggedstaffemail" className="userprofilepar">
                  {" "}
                </p>
              </div>
            </div>
            <div className="sideMenu" id="sideMenuID">
              <ul className="navbar-nav">
                <li id="liCreateAcc">
                  <a href="#" onClick={() => "showCreateAccount()"}>
                    <i className="fas fa-credit-card"></i> &nbsp; Credit
                  </a>
                </li>
                <li id="liDebit">
                  <a href="#" onClick={() => "showDebitPage()"}>
                    <i className="fas fa-credit-card"></i> &nbsp; Debit
                  </a>
                </li>
                <li className="allUsersAccounts" id="liUsersAcc">
                  <a href="#" onClick={() => "showTransaction()"}>
                    <i className="fas fa-exchange-alt"></i> &nbsp; Users'
                    Accounts
                  </a>
                </li>
                <li id="liResetPassword">
                  <a href="#" onClick={() => "showResetPassword()"}>
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
            <div className="createAccount" id="usercreateAccount">
              <h2>Credit</h2>
              <form action="" id="creditsubmit">
                <div className="createAccountInput">
                  <input
                    type="number"
                    id="creditAccountNumberId"
                    placeholder=" Account Number"
                    required=""
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="float"
                    id="creditAmountId"
                    placeholder=" Amount"
                    required=""
                  />
                </div>
                <input
                  type="button"
                  onfocus="createAccountSubmit()"
                  className="submitinput"
                  value="Credit"
                />
                <hr />
                <div id="accmessage" className="successmsg"></div>
                <div
                  className="createAccNotification"
                  id="createAccountNotification"
                >
                  <p>Are you sure you want to CREDIT the above bank account?</p>
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
                onClick={() => "closeCreateAccount()"}
              >
                &times;
              </a>
            </div>

            <div className="createAccount" id="debitId">
              <h2>Debit</h2>
              <form action="" id="debitsubmitformId">
                <div className="createAccountInput">
                  <input
                    type="number"
                    id="debitAccountnumberValueId"
                    placeholder="Account Number"
                    required=""
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="float"
                    id="debitAmountValueId"
                    placeholder="Amount"
                    required=""
                  />
                </div>

                <input
                  type="button"
                  onfocus="createAccountSubmit()"
                  className="submitinput"
                  value="Debit"
                />
                <hr />
                <div id="DebitErrMessage" className="successmsg"></div>
                <div className="createAccNotification" id="debitNotification">
                  <p>Are you sure you want to DEBIT the above bank account?</p>
                  <input
                    type="button"
                    value="No"
                    id="debitValueNO"
                    className="submitinput"
                    onClick={() => "NOclose()"}
                  />
                  <input
                    type="submit"
                    value="YES"
                    id="debitYESbutton"
                    className="submitinput"
                    onClick={() => "YESclose()"}
                  />
                </div>
              </form>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closecreateAccount"
                onClick={() => "closeDebitPage()"}
              >
                &times;
              </a>
            </div>

            <div className="transactionsPage" id="transaction-page">
              <div id="accountsListId"></div>

              <div id="transactionsId"> </div>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closeTransactions"
                onClick={() => "closeTransactions()"}
              >
                &times;
              </a>
            </div>

            <div className="transactionsPage" id="viewSpeficAccount">
              <div className="singleAccountView">
                <div className="singleAccountViewOne">
                  <h2>GISA Chris</h2>
                  <img src={imagesgg} alt="icon" width="100px" height="100px" />

                  <p>Account Number: 040-2754-100</p>
                  <p>Created On: 02-10-2018</p>
                  <p>Owner: GISA Chris</p>
                  <p>Bank Type: Saving</p>
                  <p>Status: Active</p>
                  <p>Balance: 700,000 frw</p>
                </div>
                <div className="singleAccountViewTwo">
                  <button className="green">Activate</button>
                  <button className="yellow">Deactivate</button>
                  <button className="red"> Delete</button>
                </div>
              </div>
              <a
                href="#"
                className="closecreateAccount-icon"
                id="closeSpecificAccount"
                onClick={() => "closeSpecificAccount()"}
              >
                &times;
              </a>
            </div>
            <div className="createAccount" id="restpassword">
              <h2>Reset Password</h2>
              <form action="" id="userCreateBankAccountId">
                <div className="createAccountInput">
                  <input
                    type="password"
                    id="debitAccountnumberValue"
                    placeholder=" Old Password"
                    required=""
                    onChange="onInputPasswordCreateAccount()"
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="password"
                    id="debitAccountnumberValue"
                    placeholder=" New Password"
                    required=""
                    onChange="onInputPasswordCreateAccount()"
                    id="passwordAreaId"
                  />
                </div>
                <div className="createAccountInput">
                  <input
                    type="password"
                    id="debitAccountnumberValue"
                    placeholder=" Confirm Password"
                    required=""
                    onChange="onInputPasswordCreateAccount()"
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
                onClick={() => "closeResetPassword()"}
              >
                &times;
              </a>
            </div>
            <div className="newusersTable" id="signupDashboard">
              <div className="transactionsPageHome" id="transactionsPageHomeId">
                <div id="homepageAccounts"></div>
                <div id="accountDetailsArea"></div>
              </div>
            </div>
            <div id="createdACCnotification" className="createdstaff">
              <p id="credit201message"></p>
              <p id="creditDisplaymessage"></p>
            </div>
          </div>
        </section>

        <footer>
          <div></div>
        </footer>
      </div>
    );
  }
}
