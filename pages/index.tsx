import Head from 'next/head';

import Title from '../components/Title/Title';
import CardKetrzyn from '../components/cards/CardKetrzyn';
import CardOlsztyn from '../components/cards/CardOlsztyn';

import styles from './main.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>Spotkajmy się w Kardamonie</title>
				<meta
					name='description'
					content='Restauracja Kardamon - przyjęcia, catering, pyszna kuchnia. Olszty, Żołnierska 4. Kętrzyn, Plac marszałka Józefa Piłsudskiego 1'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/ketrzyn/fav.png' />
			</Head>
			<main className={styles.wrapper}>
				<Title />
				<section className={styles.cards__wrapper}>
					<CardOlsztyn />
					<CardKetrzyn />
				</section>
			</main>
		</>
	);
}
