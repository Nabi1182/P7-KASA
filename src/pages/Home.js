import React from 'react';
import Thumb from '@/components/Thumb';
import "./home.css"
const data = require('@/logements.json')


const Home = () => {

	return (
		<div className='home'>
			<div className='preroll'>
				<p>Chez vous, partout et ailleurs</p>
			</div>
			<main>
				{
					data.map(data => (
						<Thumb
							id={data.id}
							title={data.title}
							cover={data.cover}
							key={data.id}
						/>
					))
				}				
			</main>
		</div>
	);
};




export default Home;