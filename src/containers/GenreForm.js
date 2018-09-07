/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import Paper from "@material-ui/core/Paper/Paper";
import { RaisedButton } from 'material-ui';
import PageBase from '../components/PageBase';

import {grey400} from 'material-ui/styles/colors';
import {createGenre} from "../store/actions/genre";
import InputField from "../components/InputField";

const styles = {
  formContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
  },
  root: {
    padding: 50,
    margin: 40,
  },
  toggleDiv: {
    maxWidth: 300,
    marginTop: 40,
    marginBottom: 5
  },
  toggleLabel: {
    color: grey400,
    fontWeight: 100
  },
  buttons: {
    marginTop: 50,
    marginLeft: '35%'
  },
  saveButton: {
    marginLeft: 5
  },
  titleText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '20%'
  }
};

class GenreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      description: 'test',
      url: 'test',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGenreUrl = this.handleGenreUrl.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleGenreUrl(event) {
    this.setState({
      url: event.target.value
    });
  }

  handleFormSubmit() {
    const values = {...this.state};
    const { onClickSubmit } = this.props;
    onClickSubmit(values);
  }

  render() {
    return (
      <PageBase
        title="Workshop Details"
        navigation="Dashboard / Workshop"
      >

        <Paper style={styles.root} elevation={1}>
          <h1 style={styles.titleText}>GENRE DETAILS</h1>
          <form style={styles.formContainer}>
            <InputField name="name" multiLine={false} floatingLabelText="Name" handleChange={this.handleName}/>
            <InputField name="url" multiLine={false} floatingLabelText="URL" handleChange={this.handleGenreUrl}/>
            <InputField name="description" multiLine={true} floatingLabelText="Description" handleChange={this.handleChange}/>

            <div style={styles.buttons}>
              <Link to="/dashboard">
                <RaisedButton label="Cancel"/>
              </Link>

              <RaisedButton
                label="Save"
                style={styles.saveButton}
                onClick={this.handleFormSubmit}
                primary={true}
              />
            </div>
          </form>
        </Paper>
      </PageBase>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    onClickSubmit: (values) =>  dispatch(createGenre(values)),
  };
}

function mapStateToProps(state){
  const { genre } = state;

  return {
    workshop: genre.data,
    loading: genre.loading,
    success: genre.success,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreForm);
