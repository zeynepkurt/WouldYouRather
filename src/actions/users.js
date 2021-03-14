export const NEW_QUESTION_TO_USER = 'NEW_QUESTION_TO_USER';
export const ANSWER_QUESTION_TO_USER = 'ANSWER_QUESTION_TO_USER'; 
export const RECEIVE_USERS = 'RECEIVE_USERS';


export function receiveUsers (users) {
	return {
    	type: RECEIVE_USERS,
      	users,
    }
}

export function newQuestionUser (question) {
	return {
    	type: NEW_QUESTION_TO_USER,
      	question,
    }
}

export function answerQuestionToUser (authedUser, qid, answer) {
	return {
    	type: ANSWER_QUESTION_TO_USER,
      	authedUser,
      	qid,
      	answer
    }
}