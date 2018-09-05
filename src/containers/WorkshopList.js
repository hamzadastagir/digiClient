import React from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from '@material-ui/core/Paper';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';

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
  columns: {
    id: {
      width: '10%'
    },
    name: {
      width: '40%'
    },
    price: {
      width: '20%'
    },
    category: {
      width: '20%'
    },
    edit: {
      width: '10%'
    }
  }
};

const WorkshopList = () => {

  return (
    <PageBase title="Workshops"
              navigation="Application / Table Page">

      <div>
        <Link to="/create" >
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500}>
            <ContentAdd />
          </FloatingActionButton>
        </Link>
        <Paper style={styles.root} elevation={1}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.name}>Name</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.rsvp}>Rsvp</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>Category</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.edit}>Edit</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Data.tablePage.items.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                  <TableRowColumn style={styles.columns.name}>{item.name}</TableRowColumn>
                  <TableRowColumn style={styles.columns.rsvp}>{item.rsvp}</TableRowColumn>
                  <TableRowColumn style={styles.columns.category}>{item.category}</TableRowColumn>
                  <TableRowColumn style={styles.columns.edit}>
                    <Link className="button" to="/form">
                      <FloatingActionButton zDepth={0}
                                            mini={true}
                                            backgroundColor={grey200}
                                            iconStyle={styles.editButton}>
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
};

export default WorkshopList;
