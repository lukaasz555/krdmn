import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newsStyles from '../../components/News/News.module.scss'
import rebuildStyles from './rebuild.module.scss';
import Head from "next/head";
import Link from "next/link";
import Logo from '../../public/ketrzyn/fav.png'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    	<Head>
				<title>
					Restauracja Kardamon | Kętrzyn, Plac marszałka Józefa Piłsudskiego 1
				</title>
				<meta
					name='description'
					content='Restauracja Kardamon w centrum Kętrzyna. Dania na wynos, imprezy okolicznościowe, catering.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/ketrzyn/fav.png' />
			</Head>
      <main className={rebuildStyles.rebuild_wrapper}>

			<div className={rebuildStyles.rebuild__container__logo}>
			<Image
							src={Logo}
							alt='Restauracja Kardamon - Kętrzyn, Plac marszałka Piłsudskiego 1'
							height={160}
							width={160}
						/>
			</div>

			<div className={rebuildStyles.rebuild__container__title}>
				<p>Strona w przebudowie</p>
			</div>

        <div className={rebuildStyles.rebuild__container__socialmedia}>
							<p style={{ margin: '0.25em', fontSize: '1em', textAlign: 'center' }}>
								Zapraszamy na nasze profile w mediach społecznościowych
							</p>
							<div style={{ display: 'flex', justifyContent: 'center', columnGap: '8px' }}>
								<Link
									href={'https://www.facebook.com/profile.php?id=100063684725171'}>
									<FontAwesomeIcon
										icon={faSquareFacebook}
										style={{ height: '24px', color: '#232832' }}
										/>
								</Link>
								<Link
									href={'https://www.instagram.com/kardamon.ketrzyn/'}>
									<FontAwesomeIcon
										icon={faSquareInstagram}
										style={{ height: '24px', color: '#232832' }}
										/>
								</Link>
							</div>
						</div>
      </main>
    </>
  )
}