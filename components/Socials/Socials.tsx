import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareFacebook,
	faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styles from './Socials.module.scss';

const Socials = () => {
	return (
		<div className={styles.socialmedia_icons}>
			<Link href={`https://www.facebook.com/kardamonolsztyn`}>
				<FontAwesomeIcon icon={faSquareFacebook} className={styles.icon} />
			</Link>
			<Link href={`https://www.instagram.com/kardamon.olsztyn/`}>
				<FontAwesomeIcon icon={faSquareInstagram} className={styles.icon} />
			</Link>
		</div>
	);
};

export default Socials;
