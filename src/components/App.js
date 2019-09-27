import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import "react-toastify/dist/ReactToastify.css";


const  App = () =>{
    return (
        <Router>
            <Routes/>
        </Router>
    )
}

export default App;
