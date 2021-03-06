import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
	const { auth, profile } = props;
	// console.log(auth);
	const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
	return (
		<nav className="nav-wrapper #37474f blue-grey darken-3">
			<div className="container">
				<Link to='/' className="brand-logo">MarioPlan</Link>
				{ links }
			</div>
		</nav>
	)
}

const mapStateToProps = (state) => {
	console.log(state, 'navbar console')
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navbar);