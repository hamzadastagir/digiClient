import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import Paper from "@material-ui/core/Paper/Paper";



const WorkshopForm = () => {

  const styles = {
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
      marginTop: 30,
      float: 'right'
    },
    saveButton: {
      marginLeft: 5
    }
  };

  return (
    <PageBase title="Profile info"
              navigation="Application / Form Page">

      <Paper style={styles.root} elevation={1}>
        <form>
          <TextField
            hintText="Name"
            floatingLabelText="Name"
            fullWidth={true}
          />

          <SelectField
            floatingLabelText="City"
            value=""
            fullWidth={true}
          >
            <MenuItem key={0} primaryText="London"/>
            <MenuItem key={1} primaryText="Paris"/>
            <MenuItem key={2} primaryText="Rome"/>
          </SelectField>

          <DatePicker
            hintText="Expiration Date"
            floatingLabelText="Expiration Date"
            fullWidth={true}
          />

          <div style={styles.toggleDiv}>
            <Toggle
              label="Disabled"
              labelStyle={styles.toggleLabel}
            />
          </div>

          <Divider/>

          <div style={styles.buttons}>
            <Link to="/">
              <RaisedButton label="Cancel"/>
            </Link>

            <RaisedButton label="Save"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>
      </Paper>
    </PageBase>
  );
};

export default WorkshopForm;
