import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { request } from '../../api/menu_olsztyn';
import Layout from '../layout';
import styles from './menu.module.scss';
import { handleCatName } from '../../../helpers/handleCatName';
import { ICourse, CourseDataProps } from '../../../models/Courses';
import { gsap } from 'gsap';

const apiQuery = `query Home {
    allCourses(first: 99) {
      id
      name
      price
      desc
	  category
    }
  }`;

export const getStaticProps = async () => {
	const data: ICourse[] = await request({
		query: apiQuery,
		variables: { limit: 59 },
	});

	return {
		props: { data },
	};
};

export default function Home({ data }: { data: { allCourses: ICourse[] } }) {
	const { allCourses } = data;
	const [filtered, setFiltered] = useState<ICourse[] | []>(allCourses);
	const [activeCategory, setActiveCategory] = useState('');

	const categories = () => {
		const cats = Array.from(new Set(allCourses.map((item) => item.category)));
		return cats.sort((a: any, b: any) => a - b);
	};

	const handleFilter = (data: string) => {
		if (allCourses) {
			const res: ICourse[] = allCourses
				.filter((item: ICourse) => item.category === data)
				.sort((a: ICourse, b: ICourse) => Number(a.price) - Number(b.price));
			setFiltered(res);
			setActiveCategory(data);
		}
	};

	useEffect(() => {
		handleFilter('1');
		gsap.fromTo(
			'#menu',
			{
				opacity: 0,
				transform: 'translateY(10%)',
			},
			{
				opacity: 1,
				transform: 'translateY(0)',
				duration: 1,
			}
		);
	}, []);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as Element;
		if (e.target !== null) {
			handleFilter(target.id);
		}
	};

	return (
		<>
			<Head>
				<title>Menu | Kardamon Olsztyn</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div id='menu'>
					<div className={styles.category_wrapper}>
						{categories().map((item: string) => (
							<button
								key={item}
								id={item}
								onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
									handleClick(e)
								}>
								{handleCatName(item)}
							</button>
						))}
					</div>
					<section className={styles.menu_wrapper}>
						<h2>{handleCatName(activeCategory)}</h2>
						<div>
							{filtered.length > 0
								? filtered.map(
										({ id, name, price, desc }: Omit<ICourse, 'category'>) => (
											<div key={id} className={styles.menu_course}>
												<div className={styles.menu_course_left}>
													<p className={styles.menu_course_left_title}>
														{name}
													</p>
													<p className={styles.menu_course_left_desc}>{desc}</p>
												</div>

												<div className={styles.menu_course_right}>
													<p>{Number(price)}zł</p>
												</div>
											</div>
										)
								  )
								: null}
						</div>
					</section>
				</div>
			</Layout>
		</>
	);
}
