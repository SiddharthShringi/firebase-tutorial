const initState = {
	projects: [
		{ id: 1, title: "Hello World", content: "Say Hello To World!" },
		{ id: 2, title: "Hello World", content: "Say Hello To World!" },
		{ id: 3, title: "Hello World", content: "Say Hello To World!" }
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('create_project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err);
			return state;
		default:
		return state
	}
}

export default projectReducer;