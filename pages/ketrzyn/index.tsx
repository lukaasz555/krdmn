import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Layout from './layout';
import Header from '../../components/ketrzyn/Header/Header';
import About from '../../components/ketrzyn/About/About';
import Offer from '../../components/ketrzyn/Offer/Offer';
import Menu from '../../components/ketrzyn/Menu/Menu';
import Footer from '../../components/ketrzyn/Footer/Footer';
import { request } from '../api/dato_ketrzyn';
import { ICourse } from '../../models/Courses';
import headerStyles from '../../components/ketrzyn/Header/Header.module.scss';
import aboutStyles from '../../components/ketrzyn/About/About.module.scss';
import offerStyles from '../../components/ketrzyn/Offer/Offer.module.scss';
import menuStyles from '../../components/ketrzyn/Menu/Menu.module.scss';
import footerStyles from '../../components/ketrzyn/Footer/Footer.module.scss';

export async function getServerSideProps() {
	const courses = await request({
		query: `
		{
			allCourses(first:99) {
			  id
			  name
			  desc
			  price
			  category
			}
		  }
		`,
	});

	const drinks = await request({
		query: `
		{
			allDrinks(first:99) {
			  id
			  name
			  desc
			  price
			  category
			}
		  }
		`,
	});

	return {
		props: { courses, drinks },
	};
}

export default function Home({
	courses,
	drinks,
}: {
	courses: { allCourses: ICourse[] };
	drinks: { allDrinks: ICourse[] };
}) {
	const headerRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const offerRef = useRef<HTMLElement>(null);
	const menuRef = useRef<HTMLElement>(null);
	const footerRef = useRef<HTMLElement>(null);

	const { allCourses } = courses;
	const { allDrinks } = drinks;

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
			<Layout>
				<header className={headerStyles.header_wrapper} ref={headerRef}>
					<Header />
				</header>
				<section ref={aboutRef} className={aboutStyles.about} id='about'>
					<About />
				</section>
				<section className={offerStyles.offer} id='offer'>
					<Offer />
				</section>
				<section id='menu' className={menuStyles.menu_wrapper}>
					<Menu courses={allCourses} drinks={allDrinks} />
				</section>
				<footer className={footerStyles.wrapper} id='contact'>
					<Footer />
				</footer>
			</Layout>
		</>
	);
}
