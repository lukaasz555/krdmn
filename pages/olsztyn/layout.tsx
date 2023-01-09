import Menu from './components/Menu';
import style from './layout.module.scss';
import TopNav from './components/TopNav/TopNav';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className={style.layout_wrapper}>
			{/* <Menu /> */}
			<TopNav />
			<main>{children}</main>
		</section>
	);
};

export default Layout;
