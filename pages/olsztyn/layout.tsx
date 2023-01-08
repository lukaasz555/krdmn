import Menu from './components/Menu';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section
			style={{
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: '#fab',
			}}>
			<Menu />
			{children}
		</section>
	);
};

export default Layout;
