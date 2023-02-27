import Link from 'next/link';
import styles from './TopNav.module.scss';
import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Socials from '../Socials/Socials';
import Logo from '../../public/olsztyn/logo_white.png';

// pass logo as a prop?
const TopNav = ({ address }: { address: string }) => {
	const [isNavOpen, setNavOpen] = useState(false);

	const mobileStyles = {
		nav: {
			display: isNavOpen ? 'block' : 'none',
		},
	};

	return (
		<div className={styles.topnav}>
			<div className={styles.topnav_wrapper}>
				<Link href={`/${address}`}>
					<Image
						src={Logo}
						// 1st letter uppercase
						alt={`Kardamon ${address}`}
						width={120}
						height={120}
						quality={100}
					/>
				</Link>
				<div>
					<button
						className={styles.topnav_button}
						onClick={() => setNavOpen(!isNavOpen)}>
						<Hamburger color='#f9f4f5' size={34} toggled={isNavOpen} />
					</button>

					<div style={mobileStyles.nav}>
						<nav className={styles.topnav_mobilenav}>
							<Link href={`/${address}`}>start</Link>
							<Link href={`/${address}/menu`}>menu</Link>
							<Link href={`/${address}/events`}>przyjęcia</Link>
							<Link href={`/${address}/contact`}>kontakt</Link>
							<Socials />
						</nav>
					</div>

					<div className={styles.topnav_desktopnav}>
						<nav>
							<Link
								href={`/${address}`}
								className={styles.topnav_desktopnav_link}>
								start <span></span>
							</Link>
							<Link
								href={`/${address}/menu`}
								className={styles.topnav_desktopnav_link}>
								menu <span></span>
							</Link>
							<Link
								href={`/${address}/events`}
								className={styles.topnav_desktopnav_link}>
								przyjęcia <span></span>
							</Link>
							<Link
								href={`/${address}/contact`}
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
