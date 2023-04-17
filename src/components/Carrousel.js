import React, { useState } from "react";

import './carrousel.css'

const Carousel = ({pictures, title}) => {
	
	//usestate stock l'indice de l'image actuelle
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const next = () => {
		setCurrentImageIndex((currentImageIndex + 1) % pictures.length)
	}

	const prev = () => {
    	setCurrentImageIndex((currentImageIndex + pictures.length - 1) % pictures.length)
	}

	return (
		<div className="carrousel">
			<img className="carrousel_img" src={pictures[currentImageIndex]} alt={title}/>
			{pictures.length>1 && <div className="carrousel_controls">
				<img className="backward" src="../../images/arrow_back.svg" alt="précedent" onClick={prev}/>
				<span>
					{currentImageIndex + 1} / {pictures.length}
				</span>
				<img className="forward" src="../../images/arrow_forward.svg" alt="suivant" onClick={next}/>
			</div>
			}
		</div>
	)

}

export default Carousel;