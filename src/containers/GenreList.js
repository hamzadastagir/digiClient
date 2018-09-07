/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from '@material-ui/core/Paper';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import { fetchWorkshops } from "../store/actions/workshop";

const styles = {
  root: {
    paddingTop: 4 * 2,
    paddingBottom: 4 * 2,
  },
  floatingActionButton: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  },
  editButton: {
    fill: grey500
  },
};

class GenreList extends React.Component {
  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }
  render() {
    const { data } = this.props;
    return (
      <PageBase
        title="Workshops"
        navigation="Application / Table Page"
      >
        <div>
          <Link to="/workshop/new" >
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
          <Paper style={styles.root} elevation={1}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>Content</TableHeaderColumn>
                  <TableHeaderColumn>Venue</TableHeaderColumn>
                  <TableHeaderColumn>Speaker</TableHeaderColumn>
                  <TableHeaderColumn>Video Link</TableHeaderColumn>
                  <TableHeaderColumn>Date Organizing</TableHeaderColumn>
                  <TableHeaderColumn>Rating</TableHeaderColumn>
                  <TableHeaderColumn>Tatal Stars</TableHeaderColumn>
                  <TableHeaderColumn>Times Rated</TableHeaderColumn>
                  <TableHeaderColumn> Edit</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data && data.map(item =>
                  <TableRow key={item._id}>
                    <TableRowColumn>{item.title}</TableRowColumn>
                    <TableRowColumn>{item.description}</TableRowColumn>
                    <TableRowColumn>{item.content}</TableRowColumn>
                    <TableRowColumn>{item.venue}</TableRowColumn>
                    <TableRowColumn>{item.speaker}</TableRowColumn>
                    <TableRowColumn>{item.videoLink}</TableRowColumn>
                    <TableRowColumn>{item.dateOrganizing}</TableRowColumn>
                    <TableRowColumn>{item.rating}</TableRowColumn>
                    <TableRowColumn>{item.starsTotal}</TableRowColumn>
                    <TableRowColumn>{item.timesRated}</TableRowColumn>
                    <TableRowColumn>
                      <Link className="button" to="/create">
                        <FloatingActionButton
                          zDepth={0}
                          mini={true}
                          backgroundColor={grey200}
                          iconStyle={styles.editButton}
                        >
                          <ContentCreate  />
                        </FloatingActionButton>
                      </Link>
                    </TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Paper>
        </div>
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
    data: workshop.get('data'),
    loading: workshop.loading,
    success: workshop.success,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreList);
