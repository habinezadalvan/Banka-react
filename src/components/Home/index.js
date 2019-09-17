import React from 'react';
import {Link} from 'react-router-dom';
const  Home = () =>{
    return (
        <div className="homepage">

        <div className="banka">
            <i className="fas fa-university"></i>
            <h1>BANKA</h1>
        </div>
        <div className="description">
            <p>
                    Banka is a light-weight core banking application that powers banking operations like account
                    creation, customer deposit and withdrawals. This app is meant to support a single bank, where
                    users can signup and create bank accounts online, but must visit the branch to withdraw or
                    deposit money..
            </p>
        </div>
        <div className="submitbutton">
            <div className="homepagelogin">
                <button><Link to='/login'>Login</Link></button>
            </div>
            <div className="homepagesignup">
                <button><Link to='/signup'>Sign up</Link></button>
            </div>
        </div>
    </div>
    )
}

export default Home;
