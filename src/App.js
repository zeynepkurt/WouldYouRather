import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import Login from './Components/Login';
import newQuestion from './Components/NewQuestion';
import QuestionContainer from './Components/QuestionContainer';
import LeaderBoard from './Components/LeaderBoard';
import NotFound from './Components/NotFound';
import Nav from './Components/Nav';

class App extends Component {
  componentDidMount() {
  	this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      <Router>
      	<Fragment>
      	
      		<div className='uppermenu'>
      			<Nav />
      		</div>
      		<hr className='hr-app-color' />
      		<div className='container'>
      			<div>
      				<Switch>
                      <Route path='/' exact component={Login} />
                      <Route path='/add' exact component={newQuestion} />
                      <Route path='/questions/:id' component={QuestionContainer} />
                      <Route path='/leaderboard' exact component={LeaderBoard} />
                      <Route component={NotFound} />
					</Switch>
      			</div>
      		</div>
      	</Fragment>
      </Router>
    );
  }
}

export default connect()(App);