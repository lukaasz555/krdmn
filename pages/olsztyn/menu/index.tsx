import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { request } from '../../api/menu_olsztyn';
import Layout from '../layout';

export interface ICourse {
	id: string;
	name: string;
	price: Number;
	desc?: string;
}

export interface CourseDataProps {
	allCourses: [];
}

const apiQuery = `query Home {
    allCourses(first: 99) {
      id
      name
      price
      desc
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
	return (
		<>
			<Head>
				<title>Menu | Kardamon Olsztyn</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<main>
					<header>
						<h1>page - Olsztyn</h1>
						{allCourses.length > 0
							? allCourses.map(
									({
										id,
										name,
										price,
									}: {
										id: string;
										name: string;
										price: Number;
									}) => (
										<div
											key={id}
											style={{
												display: 'flex',
												justifyContent: 'space-between',
												width: '300px',
											}}>
											<p>{name}</p>
											<p>{String(price)}</p>
										</div>
									)
							  )
							: null}
					</header>
				</main>
			</Layout>
		</>
	);
}
