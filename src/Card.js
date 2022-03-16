import React from 'react';


function card(props) {
	return (
			<div className='card'>
				<img src={props.imageUrl}/>
				<h3>{props.title}</h3>
				<p>{props.detal}</p>
				<p>{props.price} ლარი</p>
			</div>
	);
 }


 export default card;