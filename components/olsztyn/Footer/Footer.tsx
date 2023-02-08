import React, { useEffect } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Socials from '../Socials/Socials';
import Logo from '../../../public/olsztyn/logo_white.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer_wrapper}>
			<div className={styles.footer_content}>
				<div className={styles.footer_block_wrapper}>
					<div className={styles.footer_block}>
						<h3 className={styles.footer_header_address}>Gdzie jesteśmy?</h3>
						<section className={styles.footer_content_address}>
							<p>Żołnierska 4</p>
							<p>10-557 Olsztyn</p>
						</section>

						<section className={styles.footer_content_address}>
							<p>
								<Link href={`tel:+48536848483`}>+48 536 848 483</Link>
							</p>
							<p>
								<Link href={`mailto:kardamonolsztyn@gmail.com`}>
									kardamonolsztyn@gmail.com
								</Link>
							</p>
						</section>
						<section className={styles.footer_content_socials}>
							<Socials />
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

					<div className={styles.footer_block}>
						<h3 className={styles.footer_header_hours}>Godziny otwarcia</h3>
						<section>
							<div className={styles.footer_content_hours}>
								<p>
									poniedziałek: <span>13:00-21:00</span>
								</p>
							</div>
							<div className={styles.footer_content_hours}>
								<p>
									wtorek: <span>13:00-21:00</span>
								</p>
							</div>
							<div className={styles.footer_content_hours}>
								<p>
									środa: <span>13:00-21:00</span>
								</p>
							</div>
							<div className={styles.footer_content_hours}>
								<p>
									czwartek: <span>13:00-21:00</span>
								</p>
							</div>
							<div className={styles.footer_content_hours}>
								<p>
									piątek: <span>13:00-21:00</span>
								</p>
							</div>
							<div className={styles.footer_content_hours}>
								<p>
									sobota: <span>13:00-21:00</span>
								</p>
							</div>

							<div className={styles.footer_content_hours}>
								<p>
									niedziela: <span>13:00-20:00</span>
								</p>
							</div>
						</section>
					</div>
				</div>
				<div className={styles.footer_bottom}>
					<Link href={`/olsztyn`}>
						<Image
							src={Logo}
							alt='Kardamon Olsztyn'
							width={80}
							height={80}
							quality={100}
						/>
					</Link>
					<p>Restauracja Kardamon {currentYear}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
