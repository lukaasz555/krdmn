import React, { useEffect, useRef, useState } from 'react';
import { handleCatName } from '../../../helpers/handleCatName';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from '../../../models/Courses';
import MenuItem from '../MenuItem/MenuItem';

const Menu = ({
	courses,
	menuRef,
}: {
	courses: ICourse[];
	menuRef: React.LegacyRef<HTMLElement>;
}) => {
	const cats = Array.from(new Set(courses.map((c) => c.category))).sort(
		(a, b) => Number(a) - Number(b)
	);

	const filtered = (arr: ICourse[], item: string) => {
		return arr.filter(({ category }) => category === item);
	};

	console.log(courses.length);
	return (
		<section ref={menuRef}>
			<h2 className={styles.menu_header}>menu</h2>

			{cats.map((item) => (
				<MenuItem title={item} courses={filtered(courses, item)} />
			))}
		</section>
	);
};

export default Menu;
