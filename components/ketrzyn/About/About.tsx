import React, { useEffect } from 'react';
import styles from './About.module.scss';
import Image from 'next/image';
import AboutPic from '../../../public/ketrzyn/about.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const About = () => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		gsap.fromTo(
			'#imgGoldBorder',
			{
				transform: 'translate(1%, 1%) scaleY(0)',
				transformOrigin: 'top',
			},
			{
				transform: 'translate(1%, 1%) scaleY(1)',
				duration: 1.5,
				scrollTrigger: {
					trigger: '#about',
					start: 'top center',
					end: 'bottom',
				},
			}
		);
	}, []);

	return (
		<div className={styles.about_content}>
			<h2 className={styles.about_header}>o nas</h2>
			<div className={styles.about_body}>
				<div className={styles.body_desc}>
					<p>
						Restauracja Kardamon to wspaniałe miejsce do spotkań i uroczystości.
						Prestiżowa lokalizacja w zabytkowym budynku ratusza miejskiego,
						niezwykły wystrój wnętrza, wysoki standard obsługi, a przede
						wszystkim pyszne menu sprawiają, że nasi goście chętnie przychodzą
						na codzienny obiad, biznesowy lunch, uroczystą kolację, organizują u
						nas spotkania w większym gronie przyjaciół oraz rodziny.
					</p>
					<p>
						Lokal stanowi doskonałą wizytówkę miasta - jest nowoczesny, a
						jednocześnie przywiązany do pięknych tradycji. Restauracja istnieje
						od 2012 roku i jest kontynuacją Pizzerii TROPS działającej na
						kętrzyńskim rynku gastronomicznym od 2009 roku. Dania, które
						odnajdziecie Państwo w naszej karcie to różnorodność smaków
						tradycyjnej kuchni polskiej, ale także potrawy z różnych stron
						świata. Dokładamy wszelkich starań, aby Państwa zaskakiwać!
					</p>
				</div>
				<div className={styles.body_img}>
					<Image
						src={AboutPic}
						alt='Restauracja Kardamon - Kętrzyn, Plac marszałka Józefa Piłsudskiego 1'
						fill={true}
					/>
					<div className={styles.body_img_border} id='imgGoldBorder'></div>
				</div>
			</div>
		</div>
	);
};

/* const About = React.forwardRef(
	(_: unknown, ref: React.LegacyRef<HTMLElement>) => {
		gsap.registerPlugin(ScrollTrigger);
		useEffect(() => {
			gsap.fromTo(
				'#imgGoldBorder',
				{
					transform: 'translate(1%, 1%) scaleY(0)',
					transformOrigin: 'top',
				},
				{
					transform: 'translate(1%, 1%) scaleY(1)',
					duration: 1.5,
					scrollTrigger: {
						trigger: '#about',
						start: 'top center',
						end: 'bottom',
					},
				}
			);
		}, []);

		return (
			<div className={styles.about_content}>
				<h2 className={styles.about_header}>o nas</h2>
				<div className={styles.about_body}>
					<div className={styles.body_desc}>
						<p>
							Restauracja Kardamon to wspaniałe miejsce do spotkań i
							uroczystości. Prestiżowa lokalizacja w zabytkowym budynku ratusza
							miejskiego, niezwykły wystrój wnętrza, wysoki standard obsługi, a
							przede wszystkim pyszne menu sprawiają, że nasi goście chętnie
							przychodzą na codzienny obiad, biznesowy lunch, uroczystą kolację,
							organizują u nas spotkania w większym gronie przyjaciół oraz
							rodziny.
						</p>
						<p>
							Lokal stanowi doskonałą wizytówkę miasta - jest nowoczesny, a
							jednocześnie przywiązany do pięknych tradycji. Restauracja
							istnieje od 2012 roku i jest kontynuacją Pizzerii TROPS
							działającej na kętrzyńskim rynku gastronomicznym od 2009 roku.
							Dania, które odnajdziecie Państwo w naszej karcie to różnorodność
							smaków tradycyjnej kuchni polskiej, ale także potrawy z różnych
							stron świata. Dokładamy wszelkich starań, aby Państwa zaskakiwać!
						</p>
					</div>
					<div className={styles.body_img}>
						<Image
							src={AboutPic}
							alt='Restauracja Kardamon - Kętrzyn, Plac marszałka Józefa Piłsudskiego 1'
							fill={true}
						/>
						<div className={styles.body_img_border} id='imgGoldBorder'></div>
					</div>
				</div>
			</div>
		);
	}
); */

export default About;
