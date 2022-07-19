import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import Header from './Header/Header'
import styles from './Layout.module.scss'
import Sidebar from './Sidebar/Sidebar'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	title,
	children
}) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<main className={styles.main}>
				<Sidebar />
				<section className={styles.content}>
					<Header />
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</div>
	)
}

export default Layout
