import style from './layout.module.scss';
import TopNav from './components/TopNav/TopNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={style.layout_wrapper}>
			<TopNav />
			<main className={style.layout_content}>{children}</main>
		</section>
	);
};

export default Layout;
