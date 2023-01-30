import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import About from '../../components/olsztyn/About/About';
import News from '../../components/olsztyn/News/News';
import Events from '../../components/olsztyn/Events/Events';
import Reviews from '../../components/olsztyn/Reviews/Reviews';
import ScrollToTop from '../../components/olsztyn/ScrollToTop/ScrollToTop';

export default function Home({ feed }: any) {
	return (
		<>
			<Head>
				<title>Restauracja Kardamon | Olsztyn, Żołnierska 4</title>
				<meta
					name='description'
					content='Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest blisko Ciebie. Olsztyn, Żołnierska 4'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
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
						<About />
						<Events />
						<News feed={feed} />
						<Reviews />
					</div>
				</Layout>
				<ScrollToTop />
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const getFeed = await fetch(
		`https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=${process.env.NEXT_ENV_IG_TOKEN}`
	);
	const feed = await getFeed.json();

	return {
		props: {
			feed,
		},
	};
};
