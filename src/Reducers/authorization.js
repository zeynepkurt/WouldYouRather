export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export default function authedUser (state=null, action) {
	switch (action.type) {
      case SET_AUTHORIZATION:
        return action.id;
      default:
        return state;
    }
}