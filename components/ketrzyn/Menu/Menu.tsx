import React, { useEffect, useRef, useState } from 'react';
import { handleCatName } from '../../../helpers/handleCatName';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const mockMenu = [
	{
		id: 'test123',
		category: '4',
		name: 'Test Course',
		price: 55,
		desc: 'description here..., description here...',
	},

	{
		id: 'test2',
		category: '4',
		name: 'Another Course',
		price: 35,
		desc: 'description here..., description here..., description here..., description here...',
	},

	{
		id: 'test2',
		category: '1',
		name: 'Test test test',
		price: 15,
		desc: 'description here...',
	},
];

const Menu = ({ menuRef }: { menuRef: React.LegacyRef<HTMLElement> }) => {
	const categoryNames = () => {
		const names = Array.from(new Set(mockMenu.map((item) => item.category)));
		return names.map((item) => handleCatName(item));
	};

	const filteredCourses = (cat: string) => {
		const res = mockMenu.filter((item) => item.category === cat);
		return res;
	};

	const cats = Array.from(new Set(mockMenu.map((item) => item.category)));

	const [isOpen, setOpen] = useState(false);

	return (
		<section ref={menuRef}>
			<h2 className={styles.menu_header}>menu</h2>

			{cats.map((item) => (
				<div>
					<button
						key={item}
						className={styles.category}
						onClick={() => setOpen(!isOpen)}>
						<p className={styles.category_name}>{handleCatName(item)}</p>
						{isOpen ? (
							<FontAwesomeIcon icon={faMinus} color='#d5a021' size={'2xl'} />
						) : (
							<FontAwesomeIcon icon={faPlus} color='#d5a021' size={'2xl'} />
						)}
					</button>
					<div>
						{filteredCourses(item).map((item) => (
							<div key={item.id} className={styles.course}>
								<div className={styles.course_top}>
									<p className={styles.course_top_info}>{item.name}</p>
									<p className={styles.course_top_info}>{item.price}zł</p>
								</div>
								<div className={styles.course_bottom}>
									<p className={styles.course_bottom_desc}>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export default Menu;
