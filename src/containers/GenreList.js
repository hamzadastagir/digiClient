/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from '@material-ui/core/Paper';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import { fetchGenres } from "../store/actions/genre";

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
          <Link to="/genre/new" >
            <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
              <ContentAdd />
            </FloatingActionButton>
          </Link>
          <Paper style={styles.root} elevation={1}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Created At</TableHeaderColumn>
                  <TableHeaderColumn>Updated At</TableHeaderColumn>
                  <TableHeaderColumn>Actions</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length > 0 && data.map(item =>
                  <TableRow key={item._id}>
                    <TableRowColumn>{item.name}</TableRowColumn>
                    <TableRowColumn>{item.createdAt}</TableRowColumn>
                    <TableRowColumn>{item.updatedAt}</TableRowColumn>
                    <TableRowColumn>
                      <FloatingActionButton
                        zDepth={0}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}
                        onClick={() => console.log('--------------------------------------')}
                      >
                        <ContentDelete />
                      </FloatingActionButton>
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
    fetchData: () =>  dispatch(fetchGenres()),
  };
}

function mapStateToProps(state){
  const { genre } = state;

  return {
    data: genre.get('data'),
    loading: genre.loading,
    success: genre.success,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreList);
