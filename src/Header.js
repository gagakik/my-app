import React from 'react';

function header() {
	return (
	 <header className="header">
		 <div className="left">
			 <a href="/index.html"><img src='/img/logo.svg' /></a>
			 <div className="header__left__title">
				 <h1 className="header__left__title-text">Bellini Beauty Bar</h1>
				 <a href="https://www.facebook.com/hashtag/%E1%83%A0%E1%83%9D%E1%83%93%E1%83%94%E1%83%A1%E1%83%90%E1%83%AA%E1%83%91%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%98%E1%83%9C%E1%83%90%E1%83%95/" className="header__left__title-link link" >#როდესაცბრწყინავ #Whenyouareshining</a>
			 </div>
		 </div>
		 <div className="header__right"><button className="button"><a href="https://www.facebook.com/bellinibeautybars">Get In Touch</a> </button>
		 </div>
	 </header>
	);
 }


 export default header;