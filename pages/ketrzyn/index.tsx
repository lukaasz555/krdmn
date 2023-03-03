import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import About from '../../components/About/About';
import News from '../../components/News/News';
import Events from '../../components/Events/Events';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FeedProps } from '../../helpers/interfaces';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Restauracja Kardamon | Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
				</title>
				<meta
					name='description'
					content='Restauracja Kardamon w centrum Kętrzyna. Dania na wynos, imprezy okolicznościowe, catering.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/ketrzyn/fav.png' />
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
						<About address='ketrzyn' />
						<Events />
						{/* <News feed={feed.data} /> */}
						{/* <Reviews /> */}
					</div>
				</Layout>
				<ScrollToTop />
			</main>
		</>
	);
}
