import React from 'react'

const ProjectDetails = (props) => {
	console.log(props)
	const id = props.match.params.id
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title-{id}</span>
					<p>Lorem ipsum dolor ame fat consteu kites a  dolet pappm jarreing fating sd thr sfat kolem</p>
				</div>
				<div className="card-action gret lighten- grey-text">
					<div>Posted by Siddharth Shringi</div>
					<div>7th December, 9am</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails;