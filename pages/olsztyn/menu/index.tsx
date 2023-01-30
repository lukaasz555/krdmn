import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { request } from '../../api/dato_olsztyn';
import Layout from '../layout';
import styles from './menu.module.scss';
import { handleCatName } from '../../../helpers/handleCatName';
import { ICourse, CourseDataProps } from '../../../models/Courses';
import Course from '../../../components/olsztyn/Course/Course';
import { slideFromBottom } from '../../../helpers/animations';
import { GetServerSideProps } from 'next';

/* export const getStaticProps = async () => {
	const data: ICourse[] = await request({
		query: `query Home {
			allCourses(first: 99) {
			  id
			  name
			  price
			  desc
			  category
			}
		  }`,
	});

	return {
		props: { data },
	};
}; */

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

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as Element;
		if (e.target !== null) {
			handleFilter(target.id);
		}
	};

	useEffect(() => {
		handleFilter('1');
		slideFromBottom('#menu');
	}, []);

	return (
		<>
			<Head>
				<title>Menu | Kardamon Olsztyn</title>
				<meta
					name='description'
					content='Pyszna elegancja smaków. Położona w centrum restauracja Kardamon jest blisko Ciebie. Olsztyn, Żołnierska 4'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<div id='menu'>
					{allCourses ? (
						<>
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
												({
													id,
													name,
													price,
													desc,
												}: Omit<ICourse, 'category'>) => (
													<Course
														key={id}
														name={name}
														price={price}
														desc={desc}
													/>
												)
										  )
										: null}
								</div>
							</section>
						</>
					) : (
						<p>Nie udało się wczytać zawartości</p>
					)}
				</div>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const data = await request({
		query: `query Home {
			allCourses(first: 99) {
			  id
			  name
			  price
			  desc
			  category
			}
		  }`,
	});

	return {
		props: { data },
	};
}
