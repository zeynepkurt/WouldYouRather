import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { setAuthorization } from '../actions/authorization';

class Nav extends Component {
  	handleLogOut = (e) => {
    	e.preventDefault();
      
      	const { dispatch } = this.props;
      	dispatch(setAuthorization(null));
      	this.props.history.push('/');
    }
  
	render () {
      const { user } = this.props;

    	return(
        	<nav className='nav'>
              <ul>
                <li>
                  <NavLink to='/' exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/add' activeClassName='active'>
                    New Question
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/leaderboard' activeClassName='active'>
                    Leader Board
                  </NavLink>
                </li>
          		{user && (
          		  <Fragment>
                    <li className='nav-user' >
                       {user.name}    
                      <img 
                          src={user.avatarURL} 
                          alt={user.id}
                          className='nav-user-img'
                      />
                    </li>
                    <li className='nav-log-out' >
					  <button 
						onClick={this.handleLogOut}
						className='logoutbtn'
					  >
						Logout
					  </button>
                    </li>
				  </Fragment>
        		)}
              </ul>
           </nav>
        );
    }
} 

function mapStateToProps ({ users, authedUser }) {
	return {
    	user: authedUser
      		? users[authedUser]
      		: null
    };
}

export default withRouter(connect(mapStateToProps)(Nav));