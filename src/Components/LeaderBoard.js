import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaTrophy } from 'react-icons/fa';

class LeaderBoard extends Component {
	render() {
      	const { users, authedUser } = this.props;

      	if (authedUser === null) {
          return <Redirect to='/' />
        }
      
    	return(
        	<Fragment>
          		{users &&
                 users.map((user, index) => (
          			<div key={user.id} className='home-container center mb-10 dp-flex'>
          			  <div className="inner-triangle">
                        <span className='leader-board-badge'>
                          {index === 0
                          	? <FaTrophy color={'#f3f308'} size={13} />
    						: index === 1
    						? <FaTrophy color={'#58D99B'} size={13} />
    						: <FaTrophy color={'#464242'} size={13} /> }
      					</span>
      				  </div>
                      <div className='leader-board-card-left'>
                          <img
                              alt={user.id}
                              src={user.avatarURL}
                              className='leader-board-author-img center'
                          />
                      </div>
					  <div className='leader-board-card-center'>
							<h2 className='leader-board-author-name mb-15'>{user.name}</h2>
							<h5 className='leader-board-author-name'>Answered questions 
								<span className='leader-board-count'>{user.answeredQuestions} </span></h5>
							<hr className='hr-leader-board-color' />
							<h5 className='leader-board-author-name'>Created questions 
								<span className='leader-board-count'>{user.createdQuestions} </span></h5>
                      </div>
					  <div className='leader-board-card-right'>
                          <div className='leader-board-container' >
                            <div className='bg-leader-board leader-board-header'>
                                  Score
                            </div>
							<hr className='hr-home-color' />
							<div className='leader-board-score center'>{user.score}</div>
						  </div>
                      </div>
                  	</div>
        		))}
          	</Fragment>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
  	let usersArr = [];
  
  	Object.entries(users).forEach(
    	([key, value]) => {
          
          	usersArr.push({
            	id: value.id,
              	name: value.name,
              	avatarURL: value.avatarURL,
              	answeredQuestions: Object.entries(value.answers).length,
              	createdQuestions: value.questions.length,
              	score: Object.entries(value.answers).length + value.questions.length,
            })
        }
    )
  
	return {
    	users: usersArr.sort((a,b) => b.score - a.score),
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard);