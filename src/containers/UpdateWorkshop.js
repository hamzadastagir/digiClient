/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import Paper from "@material-ui/core/Paper/Paper";
import { RaisedButton } from 'material-ui';
import PageBase from '../components/PageBase';

import {grey400} from 'material-ui/styles/colors';
import { updateWorkshop, getWorkshopDataById } from "../store/actions/workshop";
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

class UpdateWorkshop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'test',
      description: 'test',
      content: 'test',
      venue: 'test',
      speaker: 'test',
      videoLink: 'test',
      dateOrganizing: 'test',
      rating: 'test',
      starsTotal: 'test',
      timesRated: 'test',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleVenue = this.handleVenue.bind(this);
    this.handleSpeaker = this.handleSpeaker.bind(this);
    this.handleVideoLink = this.handleVideoLink.bind(this);
    this.handleDateOrg = this.handleDateOrg.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleTimeRated = this.handleTimeRated.bind(this);
    this.handleStars = this.handleStars.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentWillMount() {
    const {workshop, fetchData, params } = this.props;
    fetchData(params._id);
    if(workshop) {
      this.setState({
        title:       workshop.title,
        description: workshop.description,
        content:     workshop.content,
        venue:       workshop.venue,
        speaker:     workshop.speaker,
        videoLink:   workshop.videoLink,
        dateOrganizing: workshop.dateOrganizing,
        rating:         workshop.rating,
        starsTotal:     workshop.starsTotal,
        timesRated:     workshop.timesRated,
      });
    }
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleVenue(event) {
    this.setState({
      venue: event.target.value
    });
  }

  handleSpeaker(event) {
    this.setState({
      speaker: event.target.value
    });
  }

  handleVideoLink(event) {
    this.setState({
      videoLink: event.target.value
    });
  }

  handleDateOrg(event) {
    this.setState({
      dateOrganizing: event.target.value
    });
  }

  handleRating(event) {
    this.setState({
      rating: event.target.value
    });
  }

  handleTimeRated(event) {
    this.setState({
      timesRated: event.target.value
    });
  }

  handleStars(event) {
    this.setState({
      starsTotal: event.target.value
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
          <h1 style={styles.titleText}>WORKSHOP DETAILS</h1>
          <form style={styles.formContainer}>
            <InputField value={this.props.title} name="title" multiLine={false} floatingLabelText="Title" handleChange={this.handleTitle}/>
            <InputField value={this.state.description} name="description" multiLine={true} floatingLabelText="Description" handleChange={this.handleChange}/>
            <InputField value={this.state.content} name="content" multiLine={false} floatingLabelText="Content" handleChange={this.handleContent}/>
            <InputField value={this.state.venue} name="venue" multiLine={false} floatingLabelText="Venue" handleChange={this.handleVenue}/>
            <InputField value={this.state.speaker} name="speaker" multiLine={false} floatingLabelText="Speaker" handleChange={this.handleSpeaker}/>
            <InputField value={this.state.videoLink} name="videoLink" multiLine={false} floatingLabelText="Video Link" handleChange={this.handleVideoLink}/>
            <InputField value={this.state.dateOrganizing}  name="dateOrganizing" multiLine={false} floatingLabelText="Date Organizing" handleChange={this.handleDateOrg}/>
            <InputField value={this.state.description} name="rating" multiLine={false} floatingLabelText="Rating" handleChange={this.handleRating}/>
            <InputField value={this.state.content} name="timesRated" multiLine={false} floatingLabelText="Times Rated" handleChange={this.handleTimeRated}/>
            <InputField value={this.state.venue} name="starsTotal" multiLine={false} floatingLabelText="Stars Total" handleChange={this.handleStars}/>
            <div style={styles.buttons}>
              <Link to="/workshops">
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
    onClickSubmit: (values) =>  dispatch(updateWorkshop(values)),
    fetchData: (id) => dispatch(getWorkshopDataById(id))
  };
}

function mapStateToProps(state){
  const { workshop } = state;

  return {
    workshop: workshop.get('data'),
    loading: workshop.get('loading'),
    success: workshop.get('success'),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateWorkshop);
