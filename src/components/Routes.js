import React, {Fragment} from 'react'
import{ Switch, Route} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import SignupDashboard from './SignupDashboard'
import Login from './Login'
import LoginDashboard from './LoginDashboard'
import AdminDashboard from './Admin'
import StaffDashboard from './Staff'

export default function Routes() {
    return (
        <Fragment>
            <Switch>
                <Route path='/' exact component = {Home}/>
                <Route path='/home' exact component = {Home}/>
                <Route path='/signupdash"' exact component = {SignupDashboard}/>
                <Route path='/signup' exact component = {Signup}/>
                <Route path='/login' exact component = {Login}/>
                <Route path='/logindash' exact component = {LoginDashboard}/>
                <Route path='/admindash' exact component = {AdminDashboard}/>
                <Route path='/staffdash' exact component = {StaffDashboard}/>
            </Switch>
        </Fragment>
    )
}

