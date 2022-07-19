import { FC } from 'react'

import AuthForm from '@/components/Layout/Header/AuthForm/AuthForm'
import ProfileMenu from '@/components/Layout/Header/Search/ProfileMenu'

import { useAuth } from '@/hooks/useAuth'

import styles from './IconsRight.module.scss'

const IconsRight: FC = () => {
	const { user } = useAuth()
	return (
		<div className={styles.icons}>
			{user ? (
				<>
					<ProfileMenu />
				</>
			) : (
				<AuthForm />
			)}
		</div>
	)
}

export default IconsRight
