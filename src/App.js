import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Bg from './Bg';
import Card from './Card'
import { Info } from '@mui/icons-material';
import Information from './comp/Information';


const arr = [{title: 'სახის და დეკოლტის მასაჟი' , detal:'Face & Decollete Massage', imageUrl:"/img/img/masala/card4.png",price:40}, // ბარათები
				{title: 'მაკიაჟი' , detal:'Make Up',imageUrl:"/img/img/masala/card3.png", price:80},
				{title: 'მანიკიური' , detal:'Manicure',imageUrl:"/img/img/masala/card2.png", price:18},
				{title: 'თმის მოვლა' , detal:'Hair Treatment',imageUrl:"/img/img/masala/card5.png", price:20},
				{title: 'პედიკიური' , detal:'Pedicure',imageUrl:"/img/img/masala/card6.png", price:35},
				{title: 'წამწამების დაგძელება' , detal:'eyelash Extension',imageUrl:"/img/img/masala/card7.png", price:80},
				{title: 'ტუჩის აუგმენტაცია' , detal:'lips Filler',imageUrl:"/img/img/masala/card8.png", price:280},
				{title: 'თმის სპა პროცედურა' , detal:'Spa For Hair',imageUrl:"/img/img/masala/card9.png", price:80},
				{title: 'ტანის ანტიცელულიტური მასაჟი' , detal:'Anti cellulite massage',imageUrl:"/img/img/masala/card1.png", price:68},
				{title: 'ფრჩხილის გელით დაგრძელება' , detal:'Neil Extension',imageUrl:"/img/img/masala/card10.png", price:85}
			];

function App() {
  return (
<div className="container">
	<div className='wrapper'>	
		<Header/>
		<Nav/>
		<Bg/>
		<div className='itemArea'>
		<div className='item'>
		{arr.map((obj)=> (
			<Card
			title={obj.title}
			detal={obj.detal}
			price={obj.price}
			imageUrl={obj.imageUrl}
		/>
		))}
		</div>
		</div>
	</div>

		<div className='maping'>
		 <Information/>
		</div>
</div>
  );
}

export default App;
