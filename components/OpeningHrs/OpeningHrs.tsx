import { useEffect } from 'react';
import styles from '../Footer/Footer.module.scss';

const OpeningHrs = ({ address }: { address: string }) => {
	useEffect(() => {
		console.log('adres w OpeningHrs: ', address);
	}, []);

	return (
		<div className={styles.footer_block}>
			<h3 className={styles.footer_header_hours}>Godziny otwarcia</h3>

			{address === 'olsztyn' ? (
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
			) : (
				<section>
					<div className={styles.footer_content_hours}>
						<p>
							poniedziałek: <span>11:00-21:00</span>
						</p>
					</div>
					<div className={styles.footer_content_hours}>
						<p>
							wtorek: <span>11:00-21:00</span>
						</p>
					</div>
					<div className={styles.footer_content_hours}>
						<p>
							środa: <span>11:00-21:00</span>
						</p>
					</div>
					<div className={styles.footer_content_hours}>
						<p>
							czwartek: <span>11:00-21:00</span>
						</p>
					</div>
					<div className={styles.footer_content_hours}>
						<p>
							piątek: <span>11:00-22:00</span>
						</p>
					</div>
					<div className={styles.footer_content_hours}>
						<p>
							sobota: <span>11:00-22:00</span>
						</p>
					</div>

					<div className={styles.footer_content_hours}>
						<p>
							niedziela: <span>11:00-21:00</span>
						</p>
					</div>
				</section>
			)}
		</div>
	);
};

export default OpeningHrs;
