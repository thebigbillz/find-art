import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// Other app components
import Settings from '../navbar/Settings';
import Navbar from '../navbar/Navbar';
import Artworks from '../artworks/Artworks';
import ArtworkBid from '../artworks/ArtworkBid';
import Userprofile from '../user/Userprofile';
import Updateprofile from '../user/Updateprofile';
import Myartworks from '../artworks/Myartworks';
import MyartworksDetails from '../artworks/MyartworksDetails';
// authentication stuffs
import PrivateRoute from '../auth/PrivateRoute';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import Logout from '../auth/Logout';
import Hello from '../auth/Hello';
// error page
// import NotFound from './NotFound';
import PAGINATION from '../utilities/PaginationArtworkBid';

class Main extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/hello" component={Hello} />
            <PrivateRoute exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/artworks" component={Artworks} />
            <PrivateRoute
              exact
              path="/artwork/bid/:id"
              component={ArtworkBid}
            />
            <PrivateRoute
              exact
              path="/user/myartworks"
              component={Myartworks}
            />
            <PrivateRoute
              exact
              path="/user/myartworks/details/:id"
              component={MyartworksDetails}
            />

            <PrivateRoute exact path="/user/profile" component={Userprofile} />

            <PrivateRoute
              exact
              path="/user/profile/update/:id"
              component={Updateprofile}
            />

            <PrivateRoute exact path="/pagination" component={PAGINATION} />

            <Route exact path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
