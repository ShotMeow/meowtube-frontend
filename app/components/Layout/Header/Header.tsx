import { FC } from 'react'

import styles from './Header.module.scss'
import IconsRight from './IconsRight/IconsRight'
import Search from './Search/Search'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Search />
			<IconsRight />
		</header>
	)
}

export default Header
