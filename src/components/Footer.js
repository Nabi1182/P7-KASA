import React from 'react';
import logo2 from '@/components/LOGO2.svg'
import { Link } from 'react-router-dom';

import "./footer.css"

const Footer = () => {
	return (
		<div className='footer'>
			<Link to="/home"><img id="logo2" src={logo2} alt="kasa logo"></img></Link>
			<p>© 2020 Kasa. All rights reserved</p>
		</div>
	);
};

export default Footer;