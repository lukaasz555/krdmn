import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import About from '../../components/About/About';
import News from '../../components/News/News';
import Events from '../../components/Events/Events';
import Reviews from '../../components/Reviews/Reviews';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FeedProps } from '../../helpers/interfaces';

export default function Home({ feed }: { feed: { data: FeedProps[] } }) {
	return (
		<>
			<Head>
				<title>
					Spotkajmy się w Kardamonie | Kardamon - Olsztyn, Żołnierska 4
				</title>
				<meta
					name='description'
					content='Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest blisko Ciebie. Olsztyn, Żołnierska 4'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/olsztyn/fav.png' />
			</Head>
			<main>
				<Layout>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: '100%',
							height: '100%',
							position: 'relative',
						}}>
						<About address='olsztyn' />
						<Events address='olsztyn' />
						<News feed={feed.data} address='olsztyn' />
						<Reviews />
					</div>
				</Layout>
				<ScrollToTop />
			</main>
		</>
	);
}

export async function getServerSideProps() {
	const getFeed = await fetch(
		`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN}&limit=10`
	);
	const feed = await getFeed.json();

	return {
		props: {
			feed,
		},
	};
}
