import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './header.css'
import logo from '@/components/LOGO.svg'

const Header = () => {
	return (
		<div className='header'>
			<header>
				<nav>
					<Link to="/home"><img id="logo" src={logo} alt="kasa logo"></img></Link>
					<ul>
						<li><NavLink to="/home" 
							className={({ isActive, isPending}) =>
								isPending ? "pending" : isActive ? "active" : ""}>
							Accueil
						</NavLink></li>
						<li><NavLink to="/about" className={({ isActive, isPending}) =>
							isPending ? "pending" : isActive ? "active" : ""}> 
							A propos
						</NavLink></li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;