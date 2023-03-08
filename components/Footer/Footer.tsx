import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Socials/Socials';
import Logo from '../../public/olsztyn/logo_white_olsztyn.png';
import Logo2 from '../../public/ketrzyn/logo_white_ketrzyn.png';
import { firstBigLetter } from '../../helpers/firstBigLetter';
import OpeningHrs from '../OpeningHrs/OpeningHrs';

const Footer = ({ address }: { address: string }) => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer_wrapper}>
			<div className={styles.footer_content}>
				<div className={styles.footer_block_wrapper}>
					<div className={styles.footer_block}>
						<h3 className={styles.footer_header_address}>Gdzie jesteśmy?</h3>
						<section className={styles.footer_content_address}>
							{address === 'olsztyn' ? (
								<>
									<p>Żołnierska 4</p>
									<p>10-557 Olsztyn</p>
								</>
							) : (
								<>
									<p>Plac marszałka Józefa Piłsudskiego 1</p>
									<p>11-400 Kętrzyn</p>
								</>
							)}
						</section>

						<section className={styles.footer_content_address}>
							{address === 'olsztyn' ? (
								<p>+48 536 848 483</p>
							) : (
								<>
									<p>89 751 10 22</p>
									<p>+48 518 518 155</p>
								</>
							)}
							<p>
								{address === 'olsztyn' ? (
									<Link href={`mailto:kardamonolsztyn@gmail.com`}>
										kardamonolsztyn@gmail.com
									</Link>
								) : (
									<Link href={`mailto:kardamonketrzyn@gmail.com`}>
										kardamonketrzyn@gmail.com
									</Link>
								)}
							</p>
						</section>
						<section className={styles.footer_content_socials}>
							<Socials address={address} />
						</section>
					</div>

					<div className={styles.footer_block}>
						<h3>Spotkajmy się w Kardamonie!</h3>
						<section className={styles.footer_content_details}>
							<p className={styles.footer_content_details_desc}>
								Zapraszamy do rezerwacji stolików oraz imprez okolicznościowych
								pod wskazanym numerem telefonu. Czeka na Was bezpłatny parking,
								piękny ogród i fantastyczne menu!
							</p>
						</section>
					</div>

					<OpeningHrs address={address} />
				</div>
				<div className={styles.footer_bottom}>
					<Link href={`/${address}`}>
						<Image
							src={address === 'olsztyn' ? Logo : Logo2}
							alt={`Kardamon ${firstBigLetter(address)}`}
							quality={100}
							width={address === 'olsztyn' ? 80 : 60}
							height={address === 'olsztyn' ? 80 : 60}
						/>
					</Link>
					<Link href={`/`} className={styles.footer_bottom_link}>
						Restauracja Kardamon {currentYear}
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
