import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Proptypes from 'prop-types'
import Dashboard from '../src/components/pages/dashboardPage';
import DetailPage from '../src/components/pages/detailPage';
import StateLocal from '../src/components/pages/statePage';
import "semantic-ui-css/semantic.min.css"

const App = ({location}) => (
    <div className="ui container">
        <Switch>
            <Route location={location} path="/detail" exact component={DetailPage}/>
            <Route location={location} path="/" exact component={Dashboard}/>
            <Route location={location} path="/state" exact component={StateLocal}/>
        </Switch>
    </div>
);
App.prototype = {
    location: Proptypes.shape({
        pathname: Proptypes.string.isRequired
    }).isRequired
};

export default App;
