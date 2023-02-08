import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../layout';
import styles from './contact.module.scss';
import Link from 'next/link';
import { slideFromBottom } from '../../../helpers/animations';

export default function Home() {
	useEffect(() => {
		slideFromBottom('#contact');
	}, []);

	return (
		<>
			<Head>
				<title>Kontakt | Kardamon - Olsztyn, Żołnierska 4</title>
				<meta
					name='description'
					content='Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest blisko Ciebie. Olsztyn, Żołnierska 4'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/olsztyn/fav.png' />
			</Head>
			<Layout>
				<section className={styles.contact_wrapper} id='contact'>
					<div className={styles.contact_top}>
						<div>
							<h3>Adres</h3>
							<p>Żołnierska 4</p>
							<p>10-557 Olsztyn</p>
						</div>

						<div>
							<h3>Kontakt</h3>
							<Link href={`tel:+48536848483`}>+48 536 848 483</Link>
							<Link href={`mailto:kardamonolsztyn@gmail.com`}>
								kardamonolsztyn@gmail.com
							</Link>
						</div>

						<div className={styles.openingHours}>
							<h3>Godziny otwarcia</h3>
							<p>pon-sob: 13 - 21</p>
							<p>niedziela: 13 - 20</p>
						</div>
					</div>
					<div className={styles.contact_bottom}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.914087947878!2d20.484400315841274!3d53.773216750351914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2798da0e4da45%3A0xa17014e33bfcb612!2sRestauracja%20Kardamon!5e0!3m2!1spl!2spl!4v1673527005686!5m2!1spl!2spl'
							loading='lazy'></iframe>
					</div>
				</section>
			</Layout>
		</>
	);
}
