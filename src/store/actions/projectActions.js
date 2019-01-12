export const createProject = (project) => {
	return (dispatch, getState) => {
		// make async call
		return dispatch({
			type: "CREATE_PROJECT", project
		})
	}
}