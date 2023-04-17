import React from 'react';
import { Link } from 'react-router-dom';


import "./thumb.css"

const Thumb = ({title, cover, id}) => {
	return (
		<Link className='thumblink' to={`../Logement/${id}`}>
			<div className='thumb' style ={{backgroundImage:`url(${cover})`}}>
				<p>{title}</p>
			</div>
		</Link>
	);
};

export default Thumb;