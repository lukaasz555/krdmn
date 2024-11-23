import Head from 'next/head';
import Layout from './layout';
import About from '../../components/About/About';
import News from '../../components/News/News';
import Events from '../../components/Events/Events';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FeedProps } from '../../helpers/interfaces';
import { request } from '../api/dato_ketrzyn';
import Greetings from '../../components/Greetings/Greetings';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import RebuildPage from '../rebuild/index';
interface HomepageProps {
	feed: {
		data: FeedProps[];
	};
}

// export default function Home({ feed }: { feed: { data: FeedProps[] } }) {
export default function Home({ feed }: HomepageProps) {
	const [feedData, setFeedData] = useState<FeedProps[]>([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const res = await axios.get(
	// 				`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN_KK}&limit=10`
	// 			);
	// 			setFeedData(res.data);
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	// return (
	// 	<>
	// 		<Head>
	// 			<title>
	// 				Restauracja Kardamon | Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
	// 			</title>
	// 			<meta
	// 				name='description'
	// 				content='Restauracja Kardamon w centrum Kętrzyna. Dania na wynos, imprezy okolicznościowe, catering.'
	// 			/>
	// 			<meta name='viewport' content='width=device-width, initial-scale=1' />
	// 			<link rel='icon' href='/ketrzyn/fav.png' />
	// 		</Head>
	// 		<main>
	// 			<Layout>
	// 				<div
	// 					style={{
	// 						display: 'flex',
	// 						flexDirection: 'column',
	// 						alignItems: 'center',
	// 						width: '100%',
	// 						height: '100%',
	// 						position: 'relative',
	// 					}}>
	// 					<About address='ketrzyn' />
	// 					<Events address='ketrzyn' />
	// 					<News feed={[]} address='ketrzyn' />
	// 				</div>
	// 			</Layout>
	// 			<ScrollToTop />
	// 		</main>
	// 	</>
	// );
	return <RebuildPage />
}

// export async function getServerSideProps() {
// 	const getFeed = await fetch(
// 		`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN_KK}&limit=10`
// 	);
// 	const feed = await getFeed.json();
// 	return {
// 		props: {
// 			feed,
// 		},
// 	};
// }
