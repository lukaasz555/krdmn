import React, { useEffect } from 'react';
import styles from './Reviews.module.scss';
import SingleReview from '../SingleReview/SingleReview';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Reviews = () => {
	useEffect(() => {
		gsap.fromTo(
			'#reviews',
			{ transform: 'translateY(50%)', zIndex: -10 },
			{
				transform: 'translateY(0)',
				duration: 1,
				zIndex: 0,
				scrollTrigger: {
					trigger: '#news',
					start: 'top center',
					end: 'bottom',
				},
			}
		);
	}, []);

	return (
		<div className={styles.reviews} id='reviews'>
			<header>
				<h3>Opinie</h3>
			</header>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					marginTop: '1em',
				}}>
				<SingleReview
					reviewAuthor='Monika'
					reviewContent='Pyszne jedzenie, solidne porcje, miła obsługa. Nowe, świetne miejsce na kulinarnej mapie Olsztyna…'
				/>

				<SingleReview
					reviewAuthor='Renata'
					reviewContent='Nowi właściciele, nowa nazwa ale przede wszystkim nowa fantastyczna jakość!!! Dania w Kardamonie to poezja smaku…'
				/>

				<SingleReview
					reviewAuthor='Julia'
					reviewContent='Menu nastawione na jakość, a nie ilość, jedzenie oraz napoje przepyszne, satysfakcjonujące porcje, a obsługa bardzo profesjonalna i sympatyczna.'
				/>
			</div>
		</div>
	);
};

export default Reviews;
