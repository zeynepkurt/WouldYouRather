import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class NewQuestion extends Component { 
  	state={
    	optionOne:'',
      	optionTwo:'',
      	toHome: false,
    }

	handleChangeOptionOne = (e) => {
    	const optionOne = e.target.value;
      
      	this.setState({
        	optionOne
        })
    }

	handleChangeOptionTwo = (e) => {
    	const optionTwo = e.target.value;
      
      	this.setState({
        	optionTwo
        })
    }

	handleSubmit = (e) => {
    	e.preventDefault();
      
      	const { optionOne, optionTwo } = this.state;
      	const { dispatch } = this.props;
      
      	dispatch(handleAddQuestion(optionOne, optionTwo));
      
      	this.setState({
        	optionOne: '',
          	optionTwo: '',
          	toHome: true,
        })
    }
  
	render() {
      	const { authedUser } = this.props;
      	const { optionOne, optionTwo, toHome } = this.state;

		if (authedUser === null || toHome === true) {
			return <Redirect to='/' />        
        }

    	return(
        	<div className='new-question-container center'>
          		<h2 className='new-question-title'>Create New Question</h2>
          		<hr className='hr-new-question-color' />
          		<span className='new-question-span-text'>Complete the question:</span>        		
          		<br/>
          		<h3 className='new-question-text-color'>Would you rather ...</h3>
          		<input 
          			placeholder='Enter Option One Text Here'
          			className='new-question-option-text'
          			onChange={this.handleChangeOptionOne}
  					text={optionOne}
          		/>
				<div className='new-question-div-or'>
                  <hr className='new-question-hr-or'/>
                  <h5 className='new-question-or'>OR</h5>
                  <hr className='new-question-hr-or'/>
				</div>
				<input 
          			placeholder='Enter Option Two Text Here'
          			className='new-question-option-text'
          			onChange={this.handleChangeOptionTwo}
  					text={optionTwo}
          		/>
				<button
					type='submit'
					disabled={optionOne === '' || optionTwo === ''}
					onClick={this.handleSubmit}
					className='addquestionbtn'
				>
					Submit
				</button>
          	</div>
        );
    }
}

function mapStateToProps({authedUser}) {
	return {
    	authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);