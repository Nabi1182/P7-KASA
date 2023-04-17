import React from 'react';
import { Link } from 'react-router-dom';

import "./error.css"

const Error = () => {
	return (
		<div>
			<main className='error'>
				<h1>404</h1>
				<p>Oups ! La page que <span>vous demandez n'existe pas.</span></p>
				<Link to="/home">Retourner sur la page d'accueil</Link>
			</main>
		</div>
	);
};

export default Error;