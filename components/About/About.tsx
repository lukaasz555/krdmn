import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import MainPic from '../../public/olsztyn/main2.jpeg';
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
						Restauracja Kardamon to wspaniałe miejsce do spotkań i uroczystości.
						Prestiżowa lokalizacja w zabytkowym budynku ratusza miejskiego,
						niezwykły wystrój wnętrza, wysoki standard obsługi, a przede
						wszystkim pyszne menu sprawiają, że nasi goście chętnie przychodzą
						na codzienny obiad, biznesowy lunch, uroczystą kolację, organizują u
						nas spotkania w większym gronie przyjaciół oraz rodziny.
					</p>

					<Link href={`/ketrzyn/menu`} className={styles.section_about_link}>
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
