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

			{/* {cats.map((item) => (
				<div>
					<button className={styles.category}>
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
			))} */}
		</section>
	);
};

export default Menu;
