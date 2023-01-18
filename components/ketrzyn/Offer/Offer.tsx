import React from 'react';
import styles from './Offer.module.scss';
import Gallery from '../Gallery/Gallery';

const Offer = React.forwardRef(
	({ offerRef }: { offerRef: React.LegacyRef<HTMLElement> }) => {
		return (
			<section className={styles.offer} ref={offerRef}>
				<div className={styles.offer_content}>
					<h2 className={styles.offer_header}>oferta</h2>
					<div className={styles.offer_desc}>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>

						<p>
							It has survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
					<Gallery />
				</div>
			</section>
		);
	}
);

export default Offer;
