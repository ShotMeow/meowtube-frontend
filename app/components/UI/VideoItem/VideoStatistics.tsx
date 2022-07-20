import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'

import { formatNumberToKUtils } from '@/utils/format-number-to-k.utils'

import styles from './VideoItem.module.scss'

interface IVideoStatistics {
	views: number
	createdAt?: number
}

dayjs.extend(relativeTime)

const VideoStatistics: FC<IVideoStatistics> = ({ views, createdAt }) => {
	return (
		<div className={styles.number_info}>
			<div className={styles.views}>
				{formatNumberToKUtils(views)} просмотров
			</div>
			{!!createdAt && (
				<>
					<div className='mx-2'>·</div>
					<div className={styles.date}>
						{dayjs(new Date(createdAt)).fromNow()}
					</div>
				</>
			)}
		</div>
	)
}

export default VideoStatistics
