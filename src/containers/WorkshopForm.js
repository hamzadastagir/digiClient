/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import Paper from "@material-ui/core/Paper/Paper";
import { RaisedButton } from 'material-ui';
import PageBase from '../components/PageBase';

import {grey400} from 'material-ui/styles/colors';
import {createWorkshop} from "../store/actions/workshop";
import InputField from "../components/InputField";

const styles = {
  formContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '85%',
  },
  root: {
    paddingTop: 4 * 2,
    paddingBottom: 4 * 2,
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
    float: 'right'
  },
  saveButton: {
    marginLeft: 5
  },
};

export class WorkshopForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: '',
      venue: '',
      speaker: '',
      videoLink: '',
      dateOrganizing: '',
      rating: '',
      starsTotal: '',
      timesRated: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
        title="Profile info"
        navigation="Application / Form Page"
      >

        <Paper style={styles.root} elevation={1}>
          <form style={styles.formContainer}>
            <InputField name={'title'} multiLine={'false'} floatingLabelText="Title" handleChange={this.handleChange}/>
            <InputField name={'description'} multiLine={'true'} floatingLabelText="Description" handleChange={this.handleChange}/>
            <InputField name={'content'} multiLine={'false'} floatingLabelText="Content" handleChange={this.handleChange}/>
            <InputField name={'venue'} multiLine={'false'} floatingLabelText="Venue" handleChange={this.handleChange}/>
            <InputField name={'speaker'} multiLine={'false'} floatingLabelText="Speaker" handleChange={this.handleChange}/>
            <InputField name={'videoLink'} multiLine={'false'} floatingLabelText="Video Link" handleChange={this.handleChange}/>
            <InputField name={'dateOrganizing'} multiLine={'false'} floatingLabelText="Date Organizing" handleChange={this.handleChange}/>
            <InputField name={'rating'} multiLine={'false'} floatingLabelText="Rating" handleChange={this.handleChange}/>
            <InputField name={'timesRated'} multiLine={'false'} floatingLabelText="Times Rated" handleChange={this.handleChange}/>
            <InputField name={'starsTotal'} multiLine={'false'} floatingLabelText="Stars Total" handleChange={this.handleChange}/>

            <div style={styles.buttons}>
              <Link to="/">
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
    onClickSubmit: (values) =>  dispatch(createWorkshop({...values, genreId: 2})),
  };
}

function mapStateToProps(state){
  const { workshopReducer } = state;

  return {
    workshop: workshopReducer.workshop,
    loading: workshopReducer.loading,
    success: workshopReducer.success,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkshopForm);
