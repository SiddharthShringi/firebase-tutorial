import React from 'react'

const ProjectSummary = ({ project }) => {
	return (
		<div className="card z-depth-0 project-summary">
			<div className="card-content grey-text text-darken-2">
				<span className="card-title">{`${project.title}-${project.id}`}</span>
				<p>Posted by Siddharth Shringi</p>
				<p className="grey-text">7th January, 4pm</p>
			</div>
		</div>
	)
}

export default ProjectSummary;