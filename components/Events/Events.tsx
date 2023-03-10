import React, { useEffect } from 'react';
import styles from './Events.module.scss';
import Image from 'next/image';
import EventPic from '../../public/olsztyn/event_olsztyn.webp';
import EventPicKK from '../../public/ketrzyn/event_ketrzyn.jpeg';
import Link from 'next/link';

const Events = ({ address }: { address: String }) => {
	return (
		<div className={styles.events_wrapper}>
			<div className={styles.events_content}>
				<div className={styles.events_left}>
					<Image
						src={address === 'olsztyn' ? EventPic : EventPicKK}
						alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
						fill={true}
						quality={100}
					/>
				</div>
				<div className={styles.events_right}>
					<h3 className={styles.events_right_header}>
						Znamy się na przyjęciach
					</h3>
					{address === 'olsztyn' ? (
						<p className={styles.events_right_desc}>
							Mamy ponad 10. letnie doświadczenie w organizacji imprez. Jesteśmy
							w stanie spełnić wszystkie wymagania i dostosować się do potrzeb
							Naszych Gości. Zadzwoń i zapytaj o szczegóły.
						</p>
					) : (
						<>
							<p className={styles.events_right_desc}>
								Urodziny, chrzciny, komunie, stypy - przygotujemy dla Was z
								wielką przyjemnością. Bo Kardamon to idealne miejsce na
								organizację uroczystości w Kętrzynie!
							</p>
							<p className={styles.events_right_desc}>
								Dla małych grup zorganizowanych mamy coś na wyłączność! Możliwa
								rezerwacja indywidualnej sali VIP tylko dla Was! Idealnie
								sprawdzi się na małe przyjęcie w gronie kilkunastu osób.
							</p>
						</>
					)}

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
