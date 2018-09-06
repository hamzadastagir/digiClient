/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {grey500, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';
import {createUser} from "../store/actions/user";

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
      maxWidth: 180,
      marginTop: 20,
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
    marginTop: 20,
    float: 'right'
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

class RegisterPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormSubmit(e){
    e.preventDefault();
    if(this.state.email && this.state.password) {
      this.props.onClick({...this.state});
    }
  }

  handleChange(e){
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  render (){
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form onSubmit={this.handleFormSubmit}>
                <TextField
                  hintText="Name"
                  floatingLabelText="Name"
                  fullWidth={true}
                  name="name"
                  onChange={this.handleChange}
                />
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
                <Link to="">
                  <RaisedButton
                    label="Register"
                    primary={true}
                    style={styles.loginBtn}
                    onClick={this.handleFormSubmit}
                  />
                </Link>
              </form>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    onClick: (values) =>  dispatch(createUser(values)),
  };
}

function mapStateToProps(state){
  const { user } = state;

  return {
    user: user.get('data'),
    loading: user.get('loading'),
    success: user.get('success'),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
