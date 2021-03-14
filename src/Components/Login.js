import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import { setAuthorization } from '../actions/authorization';
import Home from './Home';


const formatOptionLabel = ({ id, name, avatarURL, props }) => (
  <div className='login-single-user'>
  	<img src={avatarURL} alt={name} className='login-user-img' />
	{name}
  </div>
);

class Login extends Component {
  	state = {
		userName: '',    
      	toHome: false,
    }

	handleOnChange = (value) => {
      	this.setState({
        	userName: value.id,
        })
    }

	handleSubmit = () => {
    	const { userName } = this.state;
      	const { dispatch, id } = this.props;

      	dispatch(setAuthorization(userName));
      
      	this.setState({
        	userName: '',
          	toHome: id === null
          			? true
          			: false,
        });
      
      	if (id !== null) {
        	this.props.history.push(`/questions/${id}`)
        }
    }

	render () {
      	const { userName, toHome } = this.state;
		const { users, authedUser } = this.props;

		if (toHome || authedUser) {
        	return <Home />
        }

    	return(
        	 <div className='login-container center' >
          		
          		

				<Select 
					onChange={this.handleOnChange} 
					formatOptionLabel={formatOptionLabel} 
					options={users} 
					getOptionLabel={(option)=>option.id}
   					getOptionValue={(option)=>option.name}
					//placeholder='Select User'
					isSearchable={false}
					className='login-select' />
				<button
					type='submit'
					disabled={userName === ''}
					onClick={this.handleSubmit}
					className='myButton'
				>
					Sign In
				</button> 
          	</div>
        );
    }
}

function mapStateToProps ({ users, authedUser }, { id }) {
	return {
    	users: Object.values(users),
      	id: id ? id : null,
      	authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Login));