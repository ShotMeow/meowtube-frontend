import Link from 'next/link'
import { FC } from 'react'

import Menu from './Menu/Menu'
import { menu } from './Menu/Menu.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	//TODO: get profile

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>MeowTube</a>
			</Link>

			<Menu title='Меню' items={menu} />

			<div className={styles.copy}>© 2022 MeowTube by ShotMeow</div>
		</aside>
	)
}

export default Sidebar
