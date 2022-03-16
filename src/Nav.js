import React from 'react';

function Nav() {
	return (
	<nav className="nav">
		<div className='nav_items'>
		<div className="nav__left">
			<ul className="nav__left__bar">
			<li><a href="#" className="nav__left__bar-link link">About</a></li>
			<li><a href="#" className="nav__left__bar-link link">Services</a></li>
			<li><a href="#" className="nav__left__bar-link link">Pricing</a></li>
			<li><a href="#" className="nav__left__bar-link link">Our Team</a></li>
			<li><a href="#" className="nav__left__bar-link link">Blog</a></li>
		</ul>
	</div>
		<div className="nav__right">
			<a href="https://goo.gl/maps/asYeFXoGAehskwfC9"><img width={30,30} src="/img/icons/map.png" /></a>
			<a href="https://www.facebook.com/bellinibeautybars"><img width={30,30} src="/img/icons/facebook.png" /></a>
			<a href="https://www.instagram.com/bellini_beauty_bar/"><img width={30,30} src="/img/icons/instagram.png" /></a>
		</div>
		</div>
	</nav>
	);
}

export default Nav;

