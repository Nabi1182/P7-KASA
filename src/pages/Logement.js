import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '@/components/Carrousel';
import Tag from '@/components/Tag';
import Dropdown from '@/components/Dropdown';
import data from "../logements.json";
import './logement.css'

import Error from './Error'



const Logement = () => {
	const [logement, setLogement] = useState({})
	const [load, setLoad] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		setLogement(data.find((p) => p.id === id))
		setLoad(true)
	}, [id])

	if (!load) {
        return <div>Loading ...</div>
    }

	if(!logement){
		return <Error/>
	}

	return (
		<div className='Logement'>
			<div className='Carrousel'>
				<Carousel pictures={logement.pictures} title={logement.title}/>
			</div>
			<div className='content'>
				<div className='description'>
					<h1>{logement.title}</h1>
					<p>{logement.location}</p>
					<div className='tagbox'>
						{
							<Tag tags={logement.tags} />
						}
					</div>
				</div>
				
				<div className='name-rating'>
					<div className='owner-info'>
						<div className='ownername'>{logement.host.name}</div>
						<div className='owner' style ={{backgroundImage:`url(${logement.host.picture})`}}></div>
					</div>
					<div className='rating' style ={{'--ratingvalue': logement.rating}}></div>
				</div>
			</div>
			
			<div className='dropdowns'>
				<Dropdown description= "Description" content= {logement.description} size ="isSmall"/>
				<Dropdown description= "Équipements" content = {logement.equipments} size = "isSmall"/>		
			</div>
		</div>
	
	);
};

export default Logement;