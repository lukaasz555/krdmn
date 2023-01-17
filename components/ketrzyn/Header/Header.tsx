import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Twirl as Hamburger } from 'hamburger-react';

const Header = () => {
	const [isNavOpen, setNavOpen] = useState(false);

	return (
		<header className={styles.header_wrapper}>
			<div className={styles.header_contact}>
				<div className={styles.contact_data}>
					<Link href={`tel:+48897511022`}>
						<FontAwesomeIcon icon={faPhone} color='#d5a021' /> (+48) 89 751 10
						22
					</Link>
					<Link href={`mailto:kardamonketrzyn@gmail.com`}>
						<FontAwesomeIcon icon={faEnvelope} color='#d5a021' />{' '}
						kardamonketrzyn@gmail.com
					</Link>
				</div>
			</div>
			<div className={styles.header_nav}>
				<button className={styles.nav_hamburger}>
					<Hamburger
						duration={0.3}
						toggled={isNavOpen}
						onToggle={() => {
							setNavOpen(!isNavOpen);
						}}
					/>
				</button>
				<nav
					style={{
						transform: isNavOpen ? 'scaleY(1)' : 'scaleY(0)',
						opacity: isNavOpen ? '1' : '0',
					}}
					className={styles.nav_mobile}>
					<Link href={`/ketrzyn/#`}>start</Link>
					<Link href={`/ketrzyn/#`}>o nas</Link>
					<Link href={`/ketrzyn/#`}>menu</Link>
					<Link href={`/ketrzyn/#`}>kontakt2</Link>
				</nav>
				<nav className={styles.nav_desktop}>
					<Link href={`/ketrzyn/#`}>start</Link>
					<Link href={`/ketrzyn/#`}>o nas</Link>
					<Link href={`/ketrzyn/#`}>menu</Link>
					<Link href={`/ketrzyn/#`}>kontakt</Link>
				</nav>
			</div>
			<div className={styles.header_hero}>
				<h1>Kardamon Kętrzyn</h1>
				<h2>Plac marszałka Józefa Piłsudskiego 1</h2>
			</div>
			<div className={styles.header_shadow}></div>
		</header>
	);
};

export default Header;
