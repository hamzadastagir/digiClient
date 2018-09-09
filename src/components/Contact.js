import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {TextField, RaisedButton} from "material-ui";

const style = {
  root: {
    paddingTop: 6 * 2,
    paddingBottom: 6 * 2,
  },
  card: {
    minWidth: 275,
    margin: '2% 5% 5% 5%',
    padding: '2% 22% 2% 22%'
  },
  button: {
    margin: 20,
  },
};

const ContactUs = () => {
  return (
    <div>
      <Paper style={style.root} elevation={1}>
        <Card style={style.card}>
          <Typography style={{ textAlign: 'center', margin: 20, color: '#16a9da' }} variant="headline" component="h3">
            CONTACT US
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            <strong>Address</strong> : 30, Cecil Street, #19-08 Prudential <br />
            Tower, Singapore 049712 <br />
            <strong>Phone No.</strong> : +65 6320 1888 <br />
            <strong>Fax No.</strong> : +65 6438 2436 <br />
            <strong>Email</strong> : connect@digitranslab.com <br />
            <br />
            <TextField
              floatingLabelText='Email Address'
              multiLine={false}
              fullWidth={true}
            />
            <TextField
              floatingLabelText='Write Your message here ...'
              multiLine={true}
              fullWidth={true}
            />
            <RaisedButton label="Primary" primary={true} style={style.button} />
          </Typography>
        </Card>
      </Paper>
      <br />
    </div>
  );
};

export default ContactUs;
