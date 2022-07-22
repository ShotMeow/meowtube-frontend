import { FC } from 'react'

import UserAvatar from '@/components/UI/UserAvatar/UserAvatar'

import { IUser } from '@/types/user.interface'

import { formatNumberToKUtils } from '@/utils/format-number-to-k.utils'

import styles from './ChannelInfoSmall.module.scss'

const ChannelInfoSmall: FC<{ channel: IUser; message?: string }> = ({
	channel,
	message
}) => {
	return (
		<div className={styles.profile_info}>
			{channel.avatarPath && <UserAvatar user={channel} />}

			<div>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subscribers_count}>
					{message ||
						formatNumberToKUtils(channel.subscribersCount) + ' подписчиков'}
				</div>
			</div>
		</div>
	)
}

export default ChannelInfoSmall
