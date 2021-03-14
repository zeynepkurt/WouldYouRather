export const SET_AUTHORIZATION = 'SET_AUTHORIZATION';

export function setAuthorization(id) {
	return {
    	type: SET_AUTHORIZATION,
      	id,
    }
}