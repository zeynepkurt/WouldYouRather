import React, { Component } from 'react';
import { handleAnswerQuestion } from '../actions/shared';
import { connect } from 'react-redux';
import Result from './QuestionResult';

class Question extends Component {
	state={
    	selectedOption: '',
      	toResult: false,
    }

	handleChange = (e) => {
    	const selectedOption = e.target.value;
      
      	this.setState({
        	selectedOption,
        })
    }

	handleSubmit = (e) => {
    	e.preventDefault();
      
      	const { selectedOption } = this.state;
      	const { dispatch, id } = this.props;
      
      	dispatch(handleAnswerQuestion(id, selectedOption));
      
      	this.setState({
        	selectedOption:'',
          	toResult: true,
        })
    }
  
	render() {
      	const { question, author, id } = this.props;
		const { selectedOption, toResult } = this.state;

		if (toResult) {
          return (<Result id={id} />)
        }

    	return(
        	<div className='home-container center'>
          		<div className='bg-header question-poll-header'>
          			{author.name} asks:
          		</div>
          		<hr className='hr-home-color' />
				<div className='in-block-left'>
					<img
						alt={author.id}
						src={author.avatarURL}
						className='question-author-img center'
					/>
				</div>
				<div className='in-block-right'>
					<h2 className='question-header'>Would You Rather ...</h2>
					<div className='question-option-block'>
                      <input
                          type='radio'
                          name='option'
                          value='optionOne'
                          onChange={this.handleChange}
                      />
                      <span className='question-option'>{question.optionOne.text}</span>
					</div>
					<div className='question-option-block'>
                      <input
                          type='radio'
                          name='option'
                          value='optionTwo'
                          onChange={this.handleChange}
                      />
                      <span className='question-option'>{question.optionTwo.text}</span>
					</div>
					<button
						type='submit'
						disabled={selectedOption === ''}
						onClick={this.handleSubmit}
						className='sbmquestionbtn'
					>
						Submit
					</button>
				</div>
          	</div>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, { id }){
  
	return {
    	question: questions[id],
      	author: users[questions[id].author],
      	id,
    }
}

export default connect(mapStateToProps)(Question);