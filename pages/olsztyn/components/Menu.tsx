import Link from 'next/link';

const Menu = () => {
	return (
		<div>
			<Link href={`/`}>Start</Link>
			<Link href={`/olsztyn/menu`}>Menu</Link>
			<Link href={`/olsztyn/events`}>Eventy</Link>
			<Link href={`/olsztyn/contact`}>Kontakt</Link>
		</div>
	);
};

export default Menu;
