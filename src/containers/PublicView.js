/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid/Grid";
import PageBase from '../components/PageBase';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {fetchWorkshops} from "../store/actions/workshop";

const styles = {
  root: {
    flexGrow: 1,
    padding: 50,
    margin: 40,
  },
  paper: {
    padding: '5%',
    textAlign: 'center',
  },
  titleText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40,
    width: '20%'
  },
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

class PublicView extends React.Component {
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
  }

  componentWillMount() {

  }

  handleFormSubmit() {
    const values = {...this.state};
    const { onClickSubmit } = this.props;
    onClickSubmit(values);
  }

  render() {
    return (
      <PageBase
        title="Visitor View"
        navigation="Homepage"
      >
        <Paper style={styles.root} elevation={1}>
          <h1 style={styles.titleText}>Recent Workshops</h1>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Card>
                <CardTitle title="Overlay title" subtitle="Overlay subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <br />
        </Paper>
      </PageBase>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchData: () =>  dispatch(fetchWorkshops()),
  };
}

function mapStateToProps(state){
  const { workshop } = state;

  return {
    workshop: workshop.data,
    loading: workshop.loading,
    success: workshop.success,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicView);
