import React from 'react';
import Dropdown from '@/components/Dropdown';

import "./about.css"

const About = () => {
	return (
		<div>
			<span className='banner'></span>
			<div className='dropdown-list'>
				<Dropdown description = "Fiabilité" size = "isLarge" content ="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
				<Dropdown description = "Respect" size = "isLarge" content ="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
				<Dropdown description = "Service" size = "isLarge" content ="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
				<Dropdown description = "Sécurité" size = "isLarge" content ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
			</div>
			
		</div>
	);
};

export default About;