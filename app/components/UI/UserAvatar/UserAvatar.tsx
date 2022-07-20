import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import { IUser } from '@/types/user.interface'

import styles from './UserAvatar.module.scss'

const UserAvatar: FC<{ user: IUser; isWhite?: boolean }> = ({
	user,
	isWhite
}) => {
	return (
		<Link href={`/c/${user.id}`}>
			<a>
				<span className={cn(styles.avatar, { [styles.white]: isWhite })}>
					<Image
						width={45}
						height={45}
						alt={user.name}
						src={user.avatarPath || ''}
					/>
					{user.isVerified && (
						<span className={styles.isVerified}>
							<IoIosCheckmarkCircle />
						</span>
					)}
				</span>
			</a>
		</Link>
	)
}

export default UserAvatar
