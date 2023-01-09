import Link from 'next/link';
import styles from './TopNav.module.scss';
import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Socials from '../Socials/Socials';

const TopNav = () => {
	const [isNavOpen, setNavOpen] = useState(false);

	const mobileStyles = {
		nav: {
			display: isNavOpen ? 'block' : 'none',
		},
	};

	return (
		<div className={styles.topnav}>
			<div className={styles.topnav_wrapper}>
				<Link href={`/olsztyn`}>
					<Image
						src='/logo_white.png'
						alt='Kardamon Olsztyn'
						width={120}
						height={120}
					/>
				</Link>
				<div>
					<button
						className={styles.topnav_button}
						onClick={() => setNavOpen(!isNavOpen)}>
						<Hamburger color='#f9f4f5' size={42} />
					</button>

					<div style={mobileStyles.nav}>
						<nav className={styles.topnav_mobilenav}>
							<Link href={`/olsztyn`}>start</Link>
							<Link href={`/olsztyn/menu`}>menu</Link>
							<Link href={`/olsztyn/events`}>przyjęcia</Link>
							<Link href={`/olsztyn/contact`}>kontakt</Link>
							<Socials />
						</nav>
					</div>

					<div className={styles.topnav_desktopnav}>
						<nav>
							<Link href={`/olsztyn`} className={styles.topnav_desktopnav_link}>
								start <span></span>
							</Link>
							<Link
								href={`/olsztyn/menu`}
								className={styles.topnav_desktopnav_link}>
								menu <span></span>
							</Link>
							<Link
								href={`/olsztyn/events`}
								className={styles.topnav_desktopnav_link}>
								przyjęcia <span></span>
							</Link>
							<Link
								href={`/olsztyn/contact`}
								className={styles.topnav_desktopnav_link}>
								kontakt <span></span>
							</Link>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
