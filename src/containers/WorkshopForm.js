import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import Paper from "@material-ui/core/Paper/Paper";
import { RaisedButton, TextField } from 'material-ui';
import PageBase from '../components/PageBase';

import {grey400} from 'material-ui/styles/colors';
import {createWorkshop} from "../store/actions/workshop";
import Header from "../components/Header";

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
  inputField: {
    marginLeft: 10,
    width: '40%',
    marginRight: 20,
  }
};

class WorkshopForm extends React.Component {
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
    const { onSubmit } = this.props;
    () => onSubmit(values);
  }

  render() {
    return (
      <PageBase
        title="Profile info"
        navigation="Application / Form Page"
      >

        <Paper style={styles.root} elevation={1}>
          <form style={styles.formContainer}>
            <TextField
              name={'title'}
              label="Title"
              floatingLabelText="Title"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              name={'description'}
              label="Description"
              floatingLabelText="Description"
              tyep={'text'}
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              name={'content'}
              label="Content"
              floatingLabelText="Content"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              name={'venue'}
              label="Venue"
              floatingLabelText="Venue"
              tyep={'text'}
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'speaker'}
              label="Speaker"
              floatingLabelText="Speaker"
              tyep={'text'}
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'videoLink'}
              label="Video Link"
              floatingLabelText="Video Link"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'dateOrganizing'}
              label="Date Organizing"
              floatingLabelText="Date Organizing"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'rating'}
              label="Rating"
              floatingLabelText="Rating"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'timesRated'}
              label="Times Rated"
              floatingLabelText="Times Rated"
              style={styles.inputField}
              onChange={this.handleChange}
            />
            <TextField
              neme={'starsTotal'}
              label="Stars Total"
              floatingLabelText="Stars Total"
              style={{...styles.inputField, marginBottom: 20 }}
              onChange={this.handleChange}
            />

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

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(createWorkshop(values));
    }
  };
};

const mapStateToProps = state => {
  const { workshopReducer } = state;

  return {
    workshop: workshopReducer.workshop,
    loading: workshopReducer.loading,
    success: workshopReducer.success,
  };
};

Header.propTypes = {
  onSubmit: PropTypes.func.isRequire
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkshopForm);
