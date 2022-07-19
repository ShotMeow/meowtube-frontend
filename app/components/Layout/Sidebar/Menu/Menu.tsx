import { FC } from 'react'

import { IMenuItem } from './Menu.interface'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

interface IMenu {
	title: string
	items: IMenuItem[]
}

const Menu: FC<IMenu> = ({ items, title }) => {
	return (
		<nav className={styles.menu}>
			<h3>{title}</h3>
			<ul>
				{items.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	)
}

export default Menu
