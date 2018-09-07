import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'Dashboard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Create Workshop', icon: <Web/>, link: '/workshop/new' },
    { text: 'Workshops', icon: <GridOn/>, link: '/workshops' },
    { text: 'Create Genre', icon: <GridOn/>, link: '/genre/new' },
    { text: 'Genre List', icon: <GridOn/>, link: '/genres' },
    { text: 'Login ', icon: <PermIdentity/>, link: '/login' },
    { text: 'Sign-Up', icon: <PermIdentity/>, link: '/register' },
    { text: 'Users', icon: <PermIdentity/>, link: '/users' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Workshop 1', rsvp: '50', category: 'Category 1'},
      {id: 2, name: 'Workshop 2', rsvp: '150', category: 'Category 2'},
      {id: 3, name: 'Workshop 3', rsvp: '250', category: 'Category 3'},
      {id: 4, name: 'Workshop 4', rsvp: '70', category: 'Category 4'},
      {id: 5, name: 'Workshop 5', rsvp: '450', category: 'Category 5'},
      {id: 6, name: 'Workshop 6', rsvp: '950', category: 'Category 6'},
      {id: 7, name: 'Workshop 7', rsvp: '550', category: 'Category 7'},
      {id: 8, name: 'Workshop 8', rsvp: '750', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Digitization', text: 'Digital Science of Marketing.'},
      {id: 2, title: 'Working Market', text: 'Working market digitization and marketing'},
      {id: 3, title: 'Mobile Marketing', text: 'Use of mobile platform for digital marketing'},
      {id: 4, title: 'Social Marketing', text: 'Use of social media for digitization'}
    ],
    
    genres: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    rsvp: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    users: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],

    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
