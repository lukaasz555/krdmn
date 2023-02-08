import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import MainPic from '../../../public/olsztyn/main2.jpeg';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			'#about',
			{ opacity: 0, transform: 'translateY(15%)' },
			{
				opacity: 1,
				transform: 'translateY(0)',
				duration: 1,
				scrollTrigger: {
					trigger: '#about',
					start: 'top center',
					end: 'bottom',
				},
			}
		);
	}, []);

	return (
		<section className={styles.section_about} id='about'>
			<div className={styles.section_about_wrapper}>
				<div className={styles.section_about_left}>
					<h3 className={styles.section_about_kardamon_header}>Kardamon</h3>
					<p className={styles.section_about_desc}>
						Kuchnia to pasja, a pyszne potrawy nie biorą się znikąd! Mamy to
						szczęście, że u nas gotują właśnie tacy pasjonaci. Na dania
						dopracowywane przez 10 lat działalności na kętrzyńskim rynku
						gastronomicznym, zapraszamy do hotelu Villa Pallas przy ulicy
						Żołnierskiej 4.
					</p>
					<p className={styles.section_about_desc}>
						Spotkajmy się w Kardamonie, miejscu innym niż wszystkie!
					</p>
					<Link href={`/olsztyn/menu`} className={styles.section_about_link}>
						sprawdź menu
					</Link>
				</div>

				<div className={styles.section_about_right}>
					<Image
						src={MainPic}
						alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
						fill={true}
						quality={100}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
