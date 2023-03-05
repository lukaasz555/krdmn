import React, { useEffect } from 'react';
import styles from './Events.module.scss';
import Image from 'next/image';
import EventPic from '../../public/olsztyn/2.jpeg';
import EventPicKK from '../../public/ketrzyn/gal1.jpeg';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Events = ({ address }: { address: String }) => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			'#e_left',
			{ opacity: 0, transform: 'translateY(-100%)' },
			{
				opacity: 1,
				transform: 'translateY(0)',
				duration: 1.1,
				scrollTrigger: {
					trigger: '#about',
					start: 'bottom center',
					end: 'bottom',
				},
			}
		);
	}, []);

	useEffect(() => {
		gsap.fromTo(
			'#e_right',
			{ opacity: 0, transform: 'translateY(100%)' },
			{
				opacity: 1,
				transform: 'translateY(0)',
				duration: 1.1,
				scrollTrigger: {
					trigger: '#events',
					start: 'top center',
					end: 'bottom',
				},
			}
		);
	}, []);

	return (
		<div className={styles.events_wrapper} id='events'>
			<div className={styles.events_content}>
				<div className={styles.events_left} id='e_left'>
					<Image
						src={address === 'olsztyn' ? EventPic : EventPicKK}
						alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
						fill={true}
						quality={100}
					/>
				</div>
				<div className={styles.events_right} id='e_right'>
					<h3 className={styles.events_right_header}>
						Znamy się na przyjęciach
					</h3>
					<p className={styles.events_right_desc}>
						Mamy ponad 10. letnie doświadczenie w organizacji imprez. Jesteśmy w
						stanie spełnić wszystkie wymagania i dostosować się do potrzeb
						Naszych Gości. Zadzwoń i zapytaj o szczegóły.
					</p>
					<Link
						className={styles.events_right_link}
						href={`/${address}/contact`}>
						kontakt
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Events;
