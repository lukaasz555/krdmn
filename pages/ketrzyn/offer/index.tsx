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
					Oferta | Kardamon Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
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
						<h3>Na miejscu i na dowóz</h3>
						<div className={styles.events_top_desc}>
							<p>
								Jesteśmy zawsze obok Ciebie! To Ty decydujesz, czy odwiedzisz
								naszą Restaurację w budynku miejskiego ratusza, czy to Kardamon
								odwiedzi Ciebie w twoim domu! Możesz zjeść na miejscu, odebrać
								osobiście lub zamówić z dostawą pod wskazany adres. Bezpłatny
								dowóz na terenie Kętrzyna przy minimalnym zamówieniu w wysokości
								30 zł. Możliwa płatność gotówką oraz kartą.
							</p>
							<p>
								Latem szczególnie zapraszamy do naszego ogródka. Stoliki na
								zewnątrz cieszą się wtedy największą popularnością!
							</p>
						</div>

						<h3>Znamy się na przyjęciach</h3>
						<div className={styles.events_top_desc}>
							<p>
								Urodziny, chrzciny, komunie, stypy - przygotujemy dla Was z
								wielką przyjemnością. Bo Kardamon to idealne miejsce na
								organizację uroczystości w Kętrzynie!
							</p>
							<p>
								Dla małych grup zorganizowanych mamy coś na wyłączność! Możliwa
								rezerwacja indywidualnej sali VIP tylko dla Was! Idealnie
								sprawdzi się na małe przyjęcie w gronie kilkunastu osób.
							</p>
						</div>

						<h3 style={{ marginTop: '1.5em' }}>Lunch dnia</h3>
						<div className={styles.events_top_desc}>
							<p>
								Od poniedziałku do piątku, w godzinach 13 - 16, w swojej ofercie
								posiadamy również lunch dnia! Możesz zjeść na miejscu w naszej
								restauracji, możesz również zamówić z dowozem pod wskazany
								adres. Lunch dnia w cenie 35 zł!
							</p>
						</div>

						<h3>Realizujemy cateringi</h3>
						<div className={styles.events_top_desc}>
							<p>
								Obstawiamy firmowe spotkania biznesowe i przerwy kawowe. Na
								słodko i na słono.
							</p>
							<p>
								Organizujesz przyjęcie i potrzebujesz naszej pomocy? Jesteśmy!
								Zapewnimy to, czego potrzebujesz, by zaskoczyć swoich gości.
								Wszystko wedle życzenia prosto z dostawą do twojego domu!
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