import Link from 'next/link';
import styles from './TopNav.module.scss';
import Image from 'next/image';
import { Fade as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Socials from '../Socials/Socials';
import Logo from '../../public/olsztyn/logo_white_olsztyn.png';
import Logo2 from '../../public/ketrzyn/logo_white_ketrzyn.png';
import { firstBigLetter } from '../../helpers/firstBigLetter';

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
						src={address === 'olsztyn' ? Logo : Logo2}
						alt={`Kardamon ${firstBigLetter(address)}`}
						width={address === 'olsztyn' ? 150 : 120}
						height={address === 'olsztyn' ? 150 : 120}
						quality={100}
						style={{ padding: `${address === 'ketrzyn' && '1em'}` }}
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
							<Link href={`/${address}/offer`}>oferta</Link>
							<Link href={`/${address}/contact`}>kontakt</Link>
							<Socials address={address} />
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
								href={`/${address}/offer`}
								className={styles.topnav_desktopnav_link}>
								oferta <span></span>
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
