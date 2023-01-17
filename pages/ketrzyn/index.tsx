import Head from 'next/head';
import Link from 'next/link';
import Layout from './layout';
import Header from '../../components/ketrzyn/Header/Header';

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
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Header />
			</Layout>
		</>
	);
}
