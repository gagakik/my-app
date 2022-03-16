import React from 'react';
import Mailer from './Mailer';

function information() {
	return (
		<div className='maping_contact'>
<iframe className='google' src="https://www.google.com/maps/embed?pb=!1m18!1m
12!1m3!1d2978.610455601018!2d44.7734475154357!3d4
1.70734437923605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f1
3.1!3m3!1m2!1s0x40440ccd90d2f7b7%3A0xf8579ef5e92a
b837!2zODMg4YOV4YOQ4YOh4YOY4YOaIOGDkeGDkOGDoOGDnOGD
neGDleGDmOGDoSDhg6Xhg6Phg6nhg5AsIOGDl-GDkeGDmOGDmuGDmOG
DoeGDmA!5e0!3m2!1ska!2sge!4v1645613685555!5m2!1ska!2sge"
 width="600" height="250" loading="lazy"></iframe>
 <Mailer/>
 <div className='callmail'>
 <div className='mobile'>
 <img src='/img/icons/telephone-call.png' width="20"/>
 <a href="tel:+995596331131">+995 596 33 11 31</a>
 </div>
 <div className='mailTel'>
 <img src='/img/icons/email.png' width="20"/>
 <a href="mailto:info@bellini.ge">info@bellini.ge</a>
 </div>
 </div>
 </div>
	);
 }

 export default information;