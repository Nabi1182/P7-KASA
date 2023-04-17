import {React, useState} from 'react';

import './dropdown.css'

//si "contents" est un array > retourne une liste avec chaque élément, 
//sinon retourne simplement le contenu.
const Dropdown = ({description, content, size}) => {
	const [isActive, setIsActive] = useState(false);
	const onClick = () => setIsActive(!isActive)
	
	const dropdownClass = `Dropdown ${size === 'isSmall' ? 'isSmall' : 'isLarge'}`

	return (
		<div className={dropdownClass} onClick={onClick}>
			<div onClick={onClick} className="menu-trigger">
				<span>{description}</span>
				<span>{isActive ? '∧' : 'v'}</span>
			</div>
			
			{Array.isArray(content) ? (
       			<ul className={`menu-content ${isActive ? 'actived' : 'inactive'}`}>
         	 		{content.map(item => (
            			<li key={item}>{item}</li>
        			))}
		        </ul>
      			) : (
        			<div className={`menu-content ${isActive ? 'actived' : 'inactive'}`}>{content}</div>
      		)}
		</div>
	)
};

export default Dropdown;