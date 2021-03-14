export const NEW_QUESTION = 'NEW_QUESTION';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';



export default function questions (state={}, action) {
	switch (action.type) {
      case RECEIVE_QUESTIONS :
        return {
        	...state,
          	...action.questions
        }
      case NEW_QUESTION:
        return {
        	...state,
           [action.question.id]: action.question,
        }
      case ANSWER_QUESTION:
        return {
        	...state,
          	[action.qid]: {
            	...state[action.qid], 
              	[action.answer]: { 
                  ...state[action.qid][action.answer], 
                  votes: state[action.qid][action.answer].votes.concat([action.authedUser]) 
                }}
        }
      default : 
        return state;
    }
}