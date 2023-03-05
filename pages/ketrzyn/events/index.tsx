import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from './events.module.scss';
import Layout from '../layout';
import { slideFromBottom } from '../../../helpers/animations';
import Image from 'next/image';
import EventPic from '../../../public/ketrzyn/gal1.jpeg';
import Link from 'next/link';

const Events = () => {
	useEffect(() => {
		slideFromBottom('#events');
	}, []);

	return (
		<>
			<Head>
				<title>
					Przyjęcia | Kardamon Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
				</title>
				<meta
					name='description'
					content='Restauracja Kardamon w centrum Kętrzyna. Dania na wynos, imprezy okolicznościowe, catering.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/ketrzyn/fav.png' />
			</Head>
			<Layout>
				<section className={styles.events_wrapper} id='events'>
					<div className={styles.events_top}>
						<h3>Znamy się na przyjęciach</h3>
						<div className={styles.events_top_desc}>
							<p>
								Urodziny, chrzciny, komunie, wesela, stypy - przygotujemy dla
								Was z wielką przyjemnością. Bo Kardamon to idealne miejsce na
								organizację uroczystości w Olsztynie!
							</p>
						</div>
						<div className={styles.events_top_desc}>
							<p>
								Jesteśmy dużą, przestronną restauracją z własnym ogrodem, a
								nasza sala główna pomieści nawet 110 osób.
							</p>
							<p>
								Chcecie coś na wyłączność? Możliwa także rezerwacja
								indywidualnej sali zamkniętej tylko dla Was! <br />
								Sala bankietowa idealnie sprawdzi się na małe przyjęcie w gronie
								15 osób. Sala klubowa pozwoli Wam zorganizować uroczystość dla
								40 osób. Sala konferencyjna to 60 miejsc przy stołach, a 100
								miejsc w ustawieniu kinowym.
							</p>
						</div>
						<h3 style={{ marginTop: '1.5em' }}>
							Realizujemy również cateringi
						</h3>
						<div className={styles.events_top_desc}>
							<p>
								Dla pięciu, dwudziestu, stu, a nawet trzystu osób! Żadna liczba
								nam nie straszna! Obstawiamy spotkania biznesowe i przerwy
								kawowe. Na słodko i na słono. Wszystko wedle życzenia!
							</p>
							<Link
								href={`/ketrzyn/contact`}
								className={styles.events_top_desc_link}>
								Zadzwoń i zapytaj o ofertę!
								<span></span>
							</Link>
						</div>
					</div>
					<div className={styles.events_bottom}>
						<Image
							src={EventPic}
							alt='Restauracja Kardamon - Olsztyn, Żołnierska 4'
							fill={true}
							quality={100}
						/>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default Events;
