export const NEW_QUESTION_TO_USER = 'NEW_QUESTION_TO_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_QUESTION_TO_USER = 'ANSWER_QUESTION_TO_USER';



export default function users (state={}, action) {
  
	switch (action.type) {
      case RECEIVE_USERS:
        return {
          ...state,
          ...action.users
        }
      case NEW_QUESTION_TO_USER:
        return {
          ...state,
          [action.question.author]: { 
            ...state[action.question.author], 
            questions: state[action.question.author].questions.concat([action.question.id])
          }
        }
      case ANSWER_QUESTION_TO_USER:
        return {
          ...state,
          [action.authedUser]: { 
            ...state[action.authedUser], 
            answers: {
            	...state[action.authedUser].answers,
              	[action.qid]: action.answer
            }
          }
        }
      default :
       	return state;
    }
}