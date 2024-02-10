import Head from 'next/head';
import Title from '../components/Title/Title';
import CardKetrzyn from '../components/cards/CardKetrzyn';
import CardOlsztyn from '../components/cards/CardOlsztyn';
import styles from './main.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import KetrzynPage from './ketrzyn/index';
import axios from 'axios';
import { FeedProps } from '../helpers/interfaces';

// interface ResType {
// 	data: {
// 		feed: FeedProps[];
// 	};
// }

export default function Home() {
	const [feedData, setFeedData] = useState<FeedProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN_KK}&limit=10`
				);
				setFeedData(res.data);
			} catch (err) {
				// console.error(err);
				console.error('Could not fetch data from Instagram API');
			}
		};
		fetchData();
	}, []);

	return <KetrzynPage feed={{ data: [] }} />;

	// return (
	// 	<>
	// 		<Head>
	// 			<title>Spotkajmy się w Kardamonie</title>
	// 			<meta
	// 				name='description'
	// 				content='Restauracja Kardamon - przyjęcia, catering, pyszna kuchnia. Olsztyn, Żołnierska 4. Kętrzyn, Plac marszałka Józefa Piłsudskiego 1'
	// 			/>
	// 			<meta name='viewport' content='width=device-width, initial-scale=1' />
	// 			<link rel='icon' href='/ketrzyn/fav.png' />
	// 		</Head>
	// 		<main className={styles.wrapper}>
	// 			<Title />
	// 			<section className={styles.cards__wrapper}>
	// 				<CardOlsztyn />
	// 				<CardKetrzyn />
	// 			</section>
	// 		</main>
	// 	</>
	// );
}

export async function getServerSideProps() {
	const getFeed = await fetch(
		`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN_KK}&limit=10`
	);
	const feed = await getFeed.json();
	return {
		props: {
			feed,
		},
	};
}
