import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import Joi from "joi-browser";
import createUser from "../../redux/actions/createUser";

export class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  };

  handleChange = ({ target }) => {
    const input = {
      [target.name]: target.value
    };
    this.setState(prevState => ({
      ...prevState,
      ...input
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { error } = Joi.validate(this.state, schema);
    const errors = {};
    if (error) {
      let errors = {};
      for (let obj of error.details) {
        errors[obj.path[0]] = obj.message.replace(/"/g, "");
      }
      Object.keys(errors).forEach(key => {
        toast.error(errors[key]);
      });
    } else {
      this.props.createUser(this.state);
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.status) {
      nextProps.history.push("/logindash");
    }
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    } = this.state;
    const { message, status } = this.props;
    console.log("status ====", status);
    return (
      <Fragment>
        <section id="main-area">
          <ToastContainer position={toast.POSITION.TOP_RIGHT} />
          <div className="backButton">
            <a href="/">
              <i className="fas fa-angle-left"></i>
            </a>
          </div>
          <div className="non-slider">
            <div className="signUp" id="userSignUp">
              <h2>Sign Up form</h2>
              <form id="signupsubmitform" onSubmit={this.handleSubmit}>
                <div className="signUpInput">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    required=""
                    id="signupfirstname"
                    value={firstname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signUpInput">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    required=""
                    id="signuplastname"
                    value={lastname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signUpInput">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                    id="signupemail"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signUpInput">
                  <input
                    type="password"
                    name="password"
                    required=""
                    id="signuppassword"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signUpInput">
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password"
                    id="signupconfirmpassword"
                    required=""
                    value={confirmpassword}
                    onChange={this.handleChange}
                  />
                </div>
                <div id="errorMessage" className="errMessage">
                  <p>
                    Both passwords should match and have 6 to 12 characters,
                    with at least one ([A-Z] & [a-z] & [0-9]
                  </p>
                </div>
                <div id="409" className="signupconflictmsg"></div>
                <input type="submit" value="Sign Up" id="submitbutton" />
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const schema = {
  firstname: Joi.string()
    .required()
    .label("Firstname"),
  lastname: Joi.string()
    .min(3)
    .required()
    .label("Lastname"),
  email: Joi.string()
    .required()
    .label("Email"),
  password: Joi.string()
    .required()
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/)
    .error(errors => {
      return errors.map(err => {
        switch (err.type) {
          case "string.regex.base":
            console.log("OPTION ERROR:", err.type);
            err.message =
              "The password should have at least one capital and small letter, and a number with 6-12 charaters!";
            return err;
          default:
            err.message;
            return err;
        }
      });
    })
    .label("Password"),
  confirmpassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .options({
      language: {
        any: {
          allowOnly: "!!Passwords do not match"
        }
      }
    })
    .label("Confirmpassword")
};
const mapStateToProps = ({ user: { message, status, error } }) => ({
  message,
  status,
  error
});

export default connect(mapStateToProps, { createUser })(Signup);
