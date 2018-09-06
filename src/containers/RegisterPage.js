import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {grey500, white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router';
import ThemeDefault from '../theme-default';

const styles = {
  loginContainer: {
    minWidth: 320,
    maxWidth: 400,
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  paper: {
    padding: 20,
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

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormSubmit(e){
    e.preventDefault();
    // this.Auth.login(this.state.email,this.state.password)
    //     .then(res =>{
    //         //this.props.route.history.replace('/');
    //     })
    //     .catch(err =>{
    //         alert(err);
    //     })
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

export default RegisterPage;
