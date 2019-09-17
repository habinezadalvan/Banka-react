import React, { Component, Fragment } from 'react';
import imagesgg from "../../assets/images/icon.png";


export default class AdminDashboard extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar" id="navbarId">
                    <div className="navbar1" >
                        <span className="open-slide">
                            <i className="fas fa-bars" onClick={() => 'showHiddenMenuArea()'} id="barsMenu"></i>
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
                    <a href="#" className="close-icon" onClick={() => 'closeHiddenMenuArea()'}>&times;</a>
                    <li><a href="#" onClick={() => 'showCreateAccountAdmin()'}>Create Account</a></li>
                    <li><a href="#" onClick={() => 'showUsersAdmin()'}>Users' Accounts</a></li>
                    <li><a href="#" onClick={() => 'showResetPasswordAdmin()'}>Reset Password</a></li>
                    <a href="/">Logout</a>
                </div>
                <section id="main-areaPage">
                    <div className="main-area-left" id="main-area-leftId">
                        <div className="profileDiv">
                            <div className="profileTitle">
                                <h2>Admin</h2>
                            </div>
                            <div className="profile">
                                <img src={imagesgg} alt="profile" width="100px" height="100px"/>
                                <p id="loggedadmin" className="userprofilepar"> </p>
                                <p id="loggedadminemail" className="userprofilepar"> </p>
                            </div>
                        </div>
                        <div className="sideMenu">
                            <ul className="navbar-nav">
                            <li id="admin1"><a href="#" onClick={() => 'showCreateAccountAdmin()'}><i className="fas fa-plus"></i> &nbsp; Create Account</a></li>
                            <li id="admin2"><a href="#" onClick={() => 'showUsersAdmin()'}><i className="fas fa-exchange-alt"></i> &nbsp; Users' Accounts</a></li>
                            <li id="admin3"><a href="#" onClick={() => 'showResetPasswordAdmin()'}> <i className="fas fa-cog"></i> &nbsp; Reset Password</a></li>
                            <li><a href="/" onClick={() => 'loginFunction()'}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-area-right" id="main-area-rightId">
                        <div className="createAccount" id="usercreateAccountAdmin">
                            <h2>Create Admin/ Staff Account</h2>
                            <form action="" id="admincreatestaff">
                                <div className="createAccountInput">
                                    <input type="text" id="createStaffId1" placeholder="First Name" required=""/>
                                </div>
                                <div className="createAccountInput">
                                    <input type="text" id="createStaffId2" placeholder="Last Name" required=""/>
                                </div>
                                <div className="createAccountInput">
                                    <input type="email" id="createStaffId3" placeholder="Email" required=""/>
                                </div>

                                <div className="createAccountInput">
                                    <input type="password" name="" required="" id="signuppassword" placeholder="Password" oninput="submitSignupFunction()" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}"/>
                                </div>
                                <div className="createAccountInput">
                                    <input type="password" name="" placeholder="Confirm Password" id="signupconfirmpassword" required="" oninput="submitSignupFunction()"/>
                                    
                                </div>
                                <div id="errorMessage" className="errMessage">
                                    <p>Both passwords should match and have 6 to 12 characters, with at least one ([A-Z] & [a-z] & [0-9]</p>
                                </div>
                                <div id="409" className="signupconflictmsg"></div>

                                <div className="createAccountInput">
                                    <input type="boolean" id="createStaffId6" placeholder="isadmin (true or false)" required=""/>
                                    
                                </div>
                                <input type="button" className="submitinput" value="Create Account" onfocus="createAccountSubmit()"/>

                                <div id="accmessage" className="successmsg"></div>

                                <div className="createAccNotification" id="createAccountNotification">
                                <p>Are you sure you want to create an admin/staff account?</p>
                                <input type="button" value="NO" id="createAccValueNO" className="submitinput" onClick={() => 'NOclose()'}/>
                                <input type="submit" value="YES" id="submitbutton" className="submitinput" onClick={() => 'YESclose()'}/>
                                </div>
                            </form>
                            <a href="#" className="closecreateAccount-icon" id="closecreateAccount" onClick={() => 'closeAdminPages()'}>&times;</a>
                            </div>
                            <div className="transactionsPage" id="usersAccountsAdmin">
                                <h3>List of Users' Accounts</h3>
                                <table>
                                        <tr>
                                            <th>No</th>
                                            <th>Account Number</th>
                                            <th>Created On</th>
                                            <th>Owner</th>
                                            <th>account Type</th>
                                            <th>Status</th>
                                            <th>Balance</th>
                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>1</td>
                                            <td>040-2754-100</td>
                                            <td>02-10-2018</td>
                                            <td>GISA Chris</td>
                                            <td>Savings</td>
                                            <td>Active</td>

                                            <td>700,000 frw</td>
                                            

                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>2</td>
                                            <td>040-3700-105</td>
                                            <td>03-10-2018</td>
                                            <td>KAMI Christian</td>
                                            <td>Savings</td>
                                            <td>Active</td>

                                            <td>900,000 frw</td>
                                            

                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>3</td>
                                            <td>040-2754-078</td>
                                            <td>02-10-2018</td>
                                            <td>GAKWAYA Kevin</td>
                                            <td>Current</td>
                                            <td>Active</td>

                                            <td>1,000,000 frw</td>
                                            

                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>4</td>
                                            <td>040-2764-070</td>
                                            <td>02-10-2018</td>
                                            <td>GISA Christophe</td>
                                            <td>Savings</td>
                                            <td>Active</td>

                                            <td>700,000 frw</td>
                                            

                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>5</td>
                                            <td>040-2754-085</td>
                                            <td>02-10-2018</td>
                                            <td>GASANA Christophe</td>
                                            <td>Current</td>
                                            <td>Active</td>

                                            <td>700,000 frw</td>
                                            

                                        </tr>
                                        <tr onClick={() => 'viewAccountAdmin()'}>
                                            <td>6</td>
                                            <td>040-2750-020</td>
                                            <td>02-10-2018</td>
                                            <td>GISANA Chris</td>
                                            <td>Savings</td>
                                            <td>Active</td>

                                            <td>800,000 frw</td>
                                            

                                        </tr>

                                    </table>
                                    <a href="#" className="closecreateAccount-icon" id="closeTransactions" onClick={() => 'closeAdminPages()'}>&times;</a>
                            </div>

                            <div className="transactionsPage" id="viewSpeficAccountAdmin">
                                <div className="singleAccountView">
                                        <div className="singleAccountViewOne">
                                            <h2>GISA Chris</h2>
                                            <img src={imagesgg} alt="icon" width="100px" height="100px"/>
                                            <p>Account Number:   040-2754-100</p>
                                            <p>Created On:   02-10-2018</p>
                                            <p>Owner:   GISA Chris</p>
                                            <p>Bank Type:   Saving</p>
                                            <p>Status:   Active</p>
                                            <p>Balance:   700,000 frw</p>
                                        </div>
                                        <div className="singleAccountViewTwo">
                                            <button className="green">Activate</button>
                                            <button className="yellow">Deactivate</button>
                                            <button className="red"> Delete</button>
                                        </div>
                                </div>
                                <a href="#" className="closecreateAccount-icon" id="closeSpecificAccount" onClick={() => 'closeAdminPages()'}>&times;</a>
                            </div>
                            <div className="createAccount" id="restpasswordAdminId">
                                <h2>Reset Password</h2>
                                <form action="" id="userCreateBankAccountId">
                                    <div className="createAccountInput">
                                        <input type="password" id="createStaffId" required="" placeholder="Old Password" oninput="onInputPasswordCreateAccount()"/>
                                    
                                    </div>
                                    <div className="createAccountInput">
                                        <input type="password" id="createStaffId" placeholder="New Password" required="" oninput="onInputPasswordCreateAccount()" id="passwordAreaId"/>
                                    </div>
                                    <div className="createAccountInput">
                                        <input type="password" id="createStaffId" placeholder="Confirm Password" required="" oninput="onInputPasswordCreateAccount()"/>
                                    
                                    </div>
                                    <div id="errorMessageCreateAccount" className="errMessage">
                                        <p>Password characters should be 6 to 12</p>
                                    </div>
                                    <input type="submit" className="submitinput" value="Reset Password" id="createAccountSubmit"/>
                                </form>
                                    <a href="#" className="closecreateAccount-icon" id="closeResetPassword" onClick={() => 'closeAdminPages()'}>&times;</a>
                            </div>
                        <div className="newusersTable" id="AdminDashboardAccounts">
                            <div className="transactionsPageHome" id="transactionsPageHomeId">
                                <h3>List of Users' Accounts</h3>
                                <table>
                                    <tr>
                                        <th>No</th>
                                        <th>Account Number</th>
                                        <th>Created On</th>
                                        <th>Owner</th>
                                        <th>Account Type</th>
                                        <th>Status</th>
                                        <th>Balance</th>
                                        
                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>1</td>
                                        <td>040-2754-100</td>
                                        <td>02-10-2018</td>
                                        <td>GISA Chris</td>
                                        <td>Savings</td>
                                        <td>Active</td>
                                        <td>700,000 frw</td>

                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>2</td>
                                        <td>040-3700-105</td>
                                        <td>03-10-2018</td>
                                        <td>KAMI Christian</td>
                                        <td>Savings</td>
                                        <td>Active</td>
                                        <td>900,000 frw</td>

                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>3</td>
                                        <td>040-2754-078</td>
                                        <td>02-10-2018</td>
                                        <td>GAKWAYA Kevin</td>
                                        <td>Current</td>
                                        <td>Active</td>
                                        <td>1,000,000 frw</td>

                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>4</td>
                                        <td>040-2764-070</td>
                                        <td>02-10-2018</td>
                                        <td>GISA Christophe</td>
                                        <td>Savings</td>
                                        <td>Active</td>
                                        <td>700,000 frw</td>

                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>5</td>
                                        <td>040-2754-085</td>
                                        <td>02-10-2018</td>
                                        <td>GASANA Christophe</td>
                                        <td>Current</td>
                                        <td>Active</td>
                                        <td>700,000 frw</td>

                                    </tr>
                                    <tr onClick={() => 'viewAccountAdmin()'}>
                                        <td>6</td>
                                        <td>040-2750-020</td>
                                        <td>02-10-2018</td>
                                        <td>GISANA Chris</td>
                                        <td>Savings</td>
                                        <td>Active</td>
                                        <td>800,000 frw</td>

                                    </tr>
                
                                </table>
                                
                            </div>
                            <div id="createdstaff" className="createdstaff">
                                <h2>Thank for creating a new user</h2>
                                <div id="paragraphs">
                                        <p id="adminStaffNames"></p>
                                        <p id="adminStaffEmail"></p>
                                        <p id="adminStaffPassword"></p>
                                        <p id="adminStaffType"></p>
                                        <p id="adminStaffIsadmin"></p>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </section>
            </Fragment>
        )
    }
}

