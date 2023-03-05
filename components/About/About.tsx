import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//
import MainPic2 from '../../public/olsztyn/main.jpeg';
import MainKetrzyn from '../../public/ketrzyn/main.jpeg';

const About = ({ address }: { address: string }) => {
	gsap.registerPlugin(ScrollTrigger);

	const description = {
		olsztyn: [
			'Kuchnia to pasja, a pyszne potrawy nie biorą się znikąd! Mamy to szczęście, że u nas gotują właśnie tacy pasjonaci. Na dania dopracowywane przez 10 lat działalności na kętrzyńskim rynku gastronomicznym, zapraszamy do hotelu Villa Pallas przy ulicy Żołnierskiej 4.',
			'Spotkajmy się w Kardamonie, miejscu innym niż wszystkie!',
		],

		ketrzyn: [
			'Restauracja Kardamon to wspaniałe miejsce do spotkań i uroczystości. Prestiżowa lokalizacja w zabytkowym budynku ratusza miejskiego, niezwykły wystrój wnętrza, wysoki standard obsługi, a przede wszystkim pyszne menu sprawiają, że nasi goście chętnie przychodzą na codzienny obiad, biznesowy lunch, uroczystą kolację, organizują u nas spotkania w większym gronie przyjaciół oraz rodziny.',
		],
	};

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

					{address === 'olsztyn' ? (
						<>
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
						</>
					) : (
						<p className={styles.section_about_desc}>
							Restauracja Kardamon to wspaniałe miejsce do spotkań i
							uroczystości. Prestiżowa lokalizacja w zabytkowym budynku ratusza
							miejskiego, niezwykły wystrój wnętrza, wysoki standard obsługi, a
							przede wszystkim pyszne menu sprawiają, że nasi goście chętnie
							przychodzą na codzienny obiad, biznesowy lunch, uroczystą kolację,
							organizują u nas spotkania w większym gronie przyjaciół oraz
							rodziny.
						</p>
					)}

					<Link href={`/${address}/menu`} className={styles.section_about_link}>
						menu
						<span></span>
					</Link>
				</div>

				<div className={styles.section_about_right}>
					<Image
						src={address === 'olsztyn' ? MainPic2 : MainKetrzyn}
						alt='Restauracja Kardamon'
						fill={true}
						quality={100}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
