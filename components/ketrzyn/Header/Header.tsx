import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Twirl as Hamburger } from 'hamburger-react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import Logo from '../../../public/ketrzyn/logo.jpeg';
import Image from 'next/image';

const Header = React.forwardRef(
	({ headerRef }: { headerRef: React.LegacyRef<HTMLElement> }) => {
		const [isNavOpen, setNavOpen] = useState(false);
		const [isScrolled, setScrolled] = useState(false);
		const scrollPos = useScrollPosition();

		return (
			<header className={styles.header_wrapper} ref={headerRef}>
				<div className={styles.header_contact}>
					<div className={styles.header_contact_content}>
						<div className={styles.contact_data}>
							<Link href={`tel:+48897511022`}>
								<FontAwesomeIcon icon={faPhone} color='#d5a021' /> (+48) 89 751
								10 22
							</Link>
							<Link href={`mailto:kardamonketrzyn@gmail.com`}>
								<FontAwesomeIcon icon={faEnvelope} color='#d5a021' />{' '}
								kardamonketrzyn@gmail.com
							</Link>
						</div>
					</div>
				</div>
				<div
					className={
						scrollPos < 300 ? styles.header_nav : styles.header_nav_active
					}>
					<div className={styles.header_content}>
						<div style={{ color: 'yellow' }} className={styles.header_logo}>
							<Link href={`/ketrzyn/`}>
								<Image src={Logo} fill={true} alt='' />
							</Link>
						</div>
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
							<Link href={`/ketrzyn/#`} onClick={() => setNavOpen(false)}>
								start
							</Link>
							<Link href={`/ketrzyn/#about`} onClick={() => setNavOpen(false)}>
								o nas
							</Link>
							<Link href={`/ketrzyn/#offer`} onClick={() => setNavOpen(false)}>
								oferta
							</Link>
							<Link href={`/ketrzyn/#menu`} onClick={() => setNavOpen(false)}>
								menu
							</Link>
							<Link
								href={`/ketrzyn/#contact`}
								onClick={() => setNavOpen(false)}>
								kontakt
							</Link>
						</nav>
						<nav className={styles.nav_desktop}>
							<Link href={`/ketrzyn/#`} onClick={() => setNavOpen(false)}>
								start
							</Link>
							<Link href={`/ketrzyn/#about`} onClick={() => setNavOpen(false)}>
								o nas
							</Link>
							<Link href={`/ketrzyn/#offer`} onClick={() => setNavOpen(false)}>
								oferta
							</Link>
							<Link href={`/ketrzyn/#menu`} onClick={() => setNavOpen(false)}>
								menu
							</Link>
							<Link
								href={`/ketrzyn/#contact`}
								onClick={() => setNavOpen(false)}>
								kontakt
							</Link>
						</nav>
					</div>
				</div>
				<div className={styles.header_hero}>
					<h1 className={styles.header_hero__kardamon}>Kardamon</h1>
					<h2>Plac marszałka Józefa Piłsudskiego 1</h2>
					<h2>11-400 Kętrzyn</h2>
				</div>
				<div className={styles.header_shadow}></div>
			</header>
		);
	}
);

export default Header;
