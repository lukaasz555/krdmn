import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Layout from './layout';
import Header from '../../components/ketrzyn/Header/Header';
import About from '../../components/ketrzyn/About/About';
import Offer from '../../components/ketrzyn/Offer/Offer';
import Menu from '../../components/ketrzyn/Menu/Menu';

export default function Home() {
	const headerRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const offerRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLElement>(null);

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
				<Header headerRef={headerRef} />
				<About aboutRef={aboutRef} />
				<Offer offerRef={offerRef} />
				<Menu menuRef={menuRef} />
			</Layout>
		</>
	);
}
