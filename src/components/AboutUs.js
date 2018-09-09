import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Footer from "./dashboard/Footer";

const style = {
  root: {
    paddingTop: 6 * 2,
    paddingBottom: 6 * 2,
  },
  card: {
    minWidth: 275,
    margin: '1% 5% 5% 5%',
    padding: 30
  },
};

const AboutUs = () => {
  return (
    <div>
      <Paper style={style.root} elevation={1}>
        <Card style={style.card}>
          <Typography style={{ textAlign: 'center', margin: 20, color: '#16a9da' }} variant="headline" component="h3">
            DIGITAL TRANSFORMATION LAB
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            Equipped with a consolidated understanding of life science, DAP E-nnovative Solutions Pvt. Ltd. initiated an educational endeavour in 2017 to support the digital
            maturity of Lifescience organizations in Asia. Over the last couple of years, Digital Transformation Lab, has been able to successfully enable healthcare marketers
            to dive deeper into the latest and best ideas in integrated multichannel marketing solutions through educational enablement, re-analysis of customer value
            propositions and marketing dynamics.
          </Typography>
          <Typography style={{ margin: 20, color: '#FF9800' }} variant="headline" component="h3">
            MISSION
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            To help businesses cater to a new ecosystem driven by advances in technology
          </Typography>
          <Typography style={{ margin: 20, color: '#FF9800' }} variant="headline" component="h3">
            VISSION
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            To help build profitable businesses in the digital economy
          </Typography>
          <Typography style={{ margin: 20, color: '#FF9800' }} variant="headline" component="h3">
            HHY US?
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            The world is going digital. Companies and brands are now following consumers who spend more time online than in the real world.
            They consume news, interact with brands and make buying decisions online. In this digital economy, it is important to know where
            you stand in terms of digital maturity compared to top global companies around the world. We can help you to better understand your
            customers and provide best possible consultative education and solutions designed for real-time relevance, so that you can better engage
            your customers and build a profitable business in the digital economy.
          </Typography>
          <Typography style={{ margin: 20, color: '#FF9800' }} variant="headline" component="h3">
            WHAT CAN WE DO FOR YOU?
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            We can help you build digital capabilities for your business by providing a customised and flexible model to shape the digital structure
            to meet the changing market demands. We can help you create the right customer-centric strategy to engage and build customer loyalty online.
            We can build and improve your business credentials through:
            <br />
            <ul>
              <li>Workshops</li>
              <li>Strategy consulting</li>
              <li>Business plan execution support</li>
            </ul>
          </Typography>

          <Typography style={{ margin: 20, color: '#FF9800' }} variant="headline" component="h3">
            DIGITAL STRATEGY
          </Typography>
          <Typography style={{ margin: 20 }} component="p">
            We endeavour to partner through the entire transformation journey (ideation to execution). We perform this through a systematic process that involves:
            <br />
            <ul>
              <li>Diagnosing and defining the problem</li>
              <li>Training and ideation of workshops</li>
              <li>1:1 and team partnership & problem-solving techniques</li>
              <li>On the job partnership to implementation</li>
              <li>Defining and measuring metrics to define success</li>
              <li>Continuous engagement (both online and offline)</li>
            </ul>
          </Typography>
        </Card>
      </Paper>
      <br />
    </div>
  );
};

export default AboutUs;
