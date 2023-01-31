import React, { useEffect, useRef, useState } from 'react';
import { handleCatName } from '../../../helpers/handleCatName';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from '../../../models/Courses';
import MenuItem from '../MenuItem/MenuItem';

interface MenuProps {
	courses: ICourse[];
	drinks: ICourse[];
	menuRef: React.LegacyRef<HTMLElement>;
}

const Menu = React.forwardRef(({ courses, drinks, menuRef }: MenuProps) => {
	const coursesCategories = Array.from(
		new Set(courses.map((c) => c.category))
	).sort((a, b) => Number(a) - Number(b));

	const drinksCategories = Array.from(
		new Set(drinks.map((d) => d.category))
	).sort((a, b) => Number(a) - Number(b));

	const filtered = (arr: ICourse[], item: string) => {
		return arr.filter(({ category }) => category === item);
	};

	return (
		<section ref={menuRef} id='menu' className={styles.menu_wrapper}>
			<h2 className={styles.menu_header}>menu</h2>

			{coursesCategories.map((item) => (
				<MenuItem title={item} items={filtered(courses, item)} />
			))}

			{drinksCategories.map((item) => (
				<MenuItem title={item} items={filtered(drinks, item)} />
			))}
		</section>
	);
});
export default Menu;
