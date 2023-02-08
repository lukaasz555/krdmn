import React from 'react';
import styles from './Footer.module.scss';

const Footer = React.forwardRef(
	({ footerRef }: { footerRef: React.LegacyRef<HTMLElement> }) => {
		return (
			<footer className={styles.wrapper} id='contact'>
				<div className={styles.wrapper_content}>
					<section>
						<div className={styles.contact_details}>
							<h3>Kardamon Kętrzyn</h3>
							<div className={styles.contact_details_content}>
								<p>Plac marszałka Józefa Piłsudskiego 1</p>
								<p>11-400 Kętrzyn</p>
							</div>

							<div className={styles.contact_details_content}>
								<p>+48 89 751 10 22</p>
								<a href='mailto:kardamonketrzyn@gmail.com'>
									kardamonketrzyn@gmail.com
								</a>
							</div>
						</div>
						<div className={styles.contact_hours}>
							<h3>Godziny otwarcia</h3>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '0.3em',
								}}>
								<p>poniedziałek - czwartek</p>
								<span style={{ flexBasis: '30%' }}>11:00 - 21:00</span>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '0.3em',
								}}>
								<p>piątek - sobota</p>
								<span style={{ flexBasis: '30%' }}>11:00 - 22:00</span>
							</div>
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '0.3em',
								}}>
								<p>niedziela</p>
								<span style={{ flexBasis: '30%' }}>11:00 - 21:00</span>
							</div>
						</div>
					</section>
					<section>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9363.069371258227!2d21.3730136!3d54.0778692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e23a5b07b3510d%3A0x4b5a06f39c463f3b!2sRestauracja%20Kardamon!5e0!3m2!1spl!2spl!4v1675166317977!5m2!1spl!2spl'
							width='800'
							height='600'
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</section>
				</div>
			</footer>
		);
	}
);

export default Footer;
