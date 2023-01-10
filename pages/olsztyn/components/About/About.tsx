import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';
import MainPic from '../../../../public/main2.jpeg';
import Link from 'next/link';

const About = () => {
	return (
		<section className={styles.section_about}>
			<div className={styles.section_about_left}>
				<h3 className={styles.section_about_header}>Restauracja Kardamon</h3>
				<p className={styles.section_about_desc}>
					Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest
					blisko Ciebie. Znajdujemy się w Hotelu Villa Pallas. Zapraszamy do nas
					zaczynając od śniadania na pysznej kolacji kończąc.
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
				/>
			</div>
		</section>
	);
};

export default About;
