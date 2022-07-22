import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { api } from '@/store/api/api'

import Menu from './Menu/Menu'
import { menu } from './Menu/Menu.data'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const { user } = useAuth()

	const { data } = api.useGetProfileQuery(null, {
		skip: !user
	})

	return (
		<aside className={styles.sidebar}>
			<Link href='/'>
				<a className={styles.logo}>MeowTube</a>
			</Link>

			<Menu title='Меню' items={menu} />
			{user && (
				<Menu
					title='Мои подписки'
					items={
						data?.subscriptions.map(({ toChannel }) => ({
							image: toChannel.avatarPath,
							title: toChannel.name,
							link: '/c/' + toChannel.id
						})) || []
					}
				/>
			)}
			<div className={styles.copy}>© 2022 MeowTube by ShotMeow</div>
		</aside>
	)
}

export default Sidebar
