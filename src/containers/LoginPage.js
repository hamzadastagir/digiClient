/* eslint-disable no-unused-vars,react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';
import AuthService from './AuthService';
import {LOGIN_USER_SUCCESS} from "../store/constants";

const styles = {
  loginContainer: {
    width: 500,
    minWidth: 700,
    maxWidth: 700,
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 110,
    overflow: 'auto'
  },
  buttonsDiv: {
    textAlign: 'center',
    padding: 10
  },
  flatButton: {
    color: grey500
  },
  checkRemember: {
    style: {
      float: 'left',
      marginTop: 20,
      maxWidth: 180,
      paddingTop: 5
    },
    labelStyle: {
      color: grey500
    },
    iconStyle: {
      color: grey500,
      borderColor: grey500,
      fill: grey500
    }
  },
  loginBtn: {
    float: 'right',
    marginTop: 20
  },
  btn: {
    background: '#4f81e9',
    color: white,
    padding: 7,
    borderRadius: 2,
    margin: 2,
    fontSize: 13
  },
  btnFacebook: {
    background: '#4f81e9'
  },
  btnGoogle: {
    background: '#e14441'
  },
  btnSpan: {
    marginLeft: 5
  },
};

class LoginPage extends React.Component {
  constructor(props){
    super(props);

    this.Auth = new AuthService();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount(){
    if(this.Auth.loggedIn()){
      this.props.route.history.replace("/");
    }
  }

  handleFormSubmit(e){
    e.preventDefault();
    this.Auth.login(this.state.email,this.state.password)
      .then(response => {
        this.props.loginAction(response);
        this.props.route.history.replace('/');
      })
      .catch(err =>{
        alert(err);
      });
  }

  handleChange(e){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>
            <Paper style={styles.paper}>
              <form onSubmit={this.handleFormSubmit}>
                <TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                  name="email"
                  onChange={this.handleChange}
                />
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />

                <Checkbox
                  label="Remember me"
                  style={styles.checkRemember.style}
                  labelStyle={styles.checkRemember.labelStyle}
                  iconStyle={styles.checkRemember.iconStyle}
                />

                <Link to="">
                  <RaisedButton
                    label="Login"
                    primary={true}
                    style={styles.loginBtn}
                    onClick={this.handleFormSubmit}
                  />
                </Link>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/register"
                style={styles.flatButton}
                icon={<PersonAdd />}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    loginAction: (response) =>  dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: response
    }),
  };
}

function mapStateToProps(state){
  const { workshop } = state;

  return {
    workshop: workshop.get('workshop'),
    loading: workshop.get('loading'),
    success: workshop.get('success'),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
