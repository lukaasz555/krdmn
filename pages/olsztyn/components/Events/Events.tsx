import React from 'react';
import styles from './Events.module.scss';
import Image from 'next/image';
import EventPic from '../../../../public/olsztyn/2.jpeg';
import Link from 'next/link';

const Events = () => {
	return (
		<div className={styles.events_wrapper}>
			<div className={styles.events_content}>
				<div className={styles.events_left}>
					<Image
						src={EventPic}
						alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
						fill={true}
					/>
				</div>
				<div className={styles.events_right}>
					<h3 className={styles.events_right_header}>
						Znamy się na przyjęciach
					</h3>
					<p className={styles.events_right_desc}>
						Mamy ponad 10. letnie doświadczenie w organizacji imprez. Jesteśmy w
						stanie spełnić wszystkie wymagania i dostosować się do potrzeb
						Naszych Gości. Zadzwoń i zapytaj o szczegóły.
					</p>
					<Link className={styles.events_right_link} href={`/olsztyn/contact`}>
						kontakt
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Events;
