import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../layout';
import styles from './contact.module.scss';
import Link from 'next/link';
import { slideFromBottom } from '../../../helpers/animations';
import RebuildPage from '../../rebuild/index';

export default function Home() {
	useEffect(() => {
		slideFromBottom('#contact');
	}, []);

	// return (
	// 	<>
	// 		<Head>
	// 			<title>
	// 				Kontakt | Kardamon Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
	// 			</title>
	// 			<meta
	// 				name='description'
	// 				content='Restauracja Kardamon w centrum Kętrzyna. Dania na wynos, imprezy okolicznościowe, catering.'
	// 			/>
	// 			<meta name='viewport' content='width=device-width, initial-scale=1' />
	// 			<link rel='icon' href='/ketrzyn/fav.png' />
	// 		</Head>
	// 		<Layout>
	// 			<section className={styles.contact_wrapper} id='contact'>
	// 				<div className={styles.contact_top}>
	// 					<div>
	// 						<h3>Adres</h3>
	// 						<p>Plac marszałka Józefa Piłsudskiego 1</p>
	// 						<p>11-400 Kętrzyn</p>
	// 					</div>

	// 					<div>
	// 						<h3>Kontakt</h3>
	// 						<Link href={`tel:897511022`}>89 751 10 22</Link>
	// 						<Link href={`tel:+48518518155`}>+48 518 518 155</Link>
	// 						<Link href={`mailto:kardamonketrzyn@gmail.com`}>
	// 							kardamonketrzyn@gmail.com
	// 						</Link>
	// 					</div>

	// 					<div className={styles.openingHours}>
	// 						<h3>Godziny otwarcia</h3>
	// 						<p>pn. - czw. 11 - 21</p>
	// 						<p>pt. - sob. 11 - 22</p>
	// 						<p>ndz. 11 - 21</p>
	// 					</div>
	// 				</div>
	// 				<div className={styles.contact_bottom}>
	// 					<iframe
	// 						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9363.069371258227!2d21.3730136!3d54.0778692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e23a5b07b3510d%3A0x4b5a06f39c463f3b!2sRestauracja%20Kardamon!5e0!3m2!1spl!2spl!4v1675166317977!5m2!1spl!2spl'
	// 						width='800'
	// 						height='600'
	// 						allowFullScreen={true}
	// 						loading='lazy'
	// 						referrerPolicy='no-referrer-when-downgrade'></iframe>
	// 				</div>
	// 			</section>
	// 		</Layout>
	// 	</>
	// );
	return <RebuildPage />;
}
