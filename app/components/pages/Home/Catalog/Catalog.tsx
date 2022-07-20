import { FC } from 'react'

import Heading from '@/components/UI/Heading/Heading'
import VideoItem from '@/components/UI/VideoItem/VideoItem'

import { IVideo } from '@/types/video.interface'

import styles from './Catalog.module.scss'

const Catalog: FC<{
	newVideos: IVideo[]
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
}> = ({ newVideos, removeHandler, isUpdateLink }) => {
	return (
		<div className={styles.recommended}>
			<div className={styles.top_block}>
				<Heading title={removeHandler ? 'Мои видео' : 'Рекомендации'} />
			</div>

			<div className={styles.catalog}>
				{newVideos.map(video => (
					<VideoItem
						item={video}
						key={video.id}
						removeHandler={removeHandler}
						isUpdateLink={isUpdateLink}
					/>
				))}
			</div>
		</div>
	)
}

export default Catalog
