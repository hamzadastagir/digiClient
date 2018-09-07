/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import MonthlySales from '../components/dashboard/MonthlySales';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import {baseApiUrl} from "../utils/constants";
const baseApiUri = 'digiserver.herokuapp.com/';
class DashboardPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      error: null,
      results: [],
      users: [],
      rsvps: [],
      workshops: [],
      genres: []
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.fetchWorkshops = this.fetchWorkshops.bind(this);
    this.fetchGenres = this.fetchGenres.bind(this);

  }

  componentWillMount() {
    this.fetchUsers();
    this.fetchWorkshops();
    this.fetchGenres();
  }

  fetchUsers() {
    axios(`${baseApiUrl}/api/users/count`, { method: 'GET' })
      .then(res => {
        if(res.data.success) {
          this.setState({
            isLoading: false,
            users: res.data.result
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          error: error.message
        });
      });
  }

  fetchWorkshops() {
    axios(`${baseApiUrl}/api/workshops/count`, { method: 'GET' })
      .then(res => {
        if(res.data.success) {
          this.setState({
            isLoading: false,
            workshops: res.data.result
          });
        }
      }).catch(error => {
      this.setState({
        isLoading: false,
        error: error.message
      });
    });
  }

  fetchGenres() {
    axios(`${baseApiUrl}/api/genres/count`, { method: 'GET' })
      .then(res => {
        if(res.data.success) {
          this.setState({
            isLoading: false,
            genres: res.data.result
          });
        }
      }).
    catch(error => {
      this.setState({
        isLoading: false,
        error: error.message
      });
    });
  }

  render(){
    const {
      users,
      workshops,
      genres,
    } = this.state;

    return (
      <div>
        <h3 style={globalStyles.navigation}>Application / Dashboard</h3>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox
              Icon={ShoppingCart}
              color={pink600}
              title="Genres"
              value={genres}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox
              Icon={ThumbUp}
              color={cyan600}
              title="Workshops"
              value={workshops}
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox
              Icon={Assessment}
              color={purple600}
              title="RSVP"
              value="460"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox
              Icon={Face}
              color={orange600}
              title="New Members"
              value={users}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.workshops} title={'Workshops / Months'}/>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.genres} title={'Workshops added to Genres / Months'}/>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.rsvp} title={'RSVP / Months'}/>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
            <MonthlySales data={Data.dashBoardPage.users} title={'Users Registered / Months'}/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-15 ">
            <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
