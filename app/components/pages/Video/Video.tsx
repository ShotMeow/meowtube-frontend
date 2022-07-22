import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import VideoPlayer from '@/components/pages/Video/VideoPlayer/VideoPlayer'

import { IVideo } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

import styles from './Video.module.scss'

const Video: FC = () => {
	const { query } = useRouter()

	const { data: video = {} as IVideo } = videoApi.useGetVideoByIdQuery(
		Number(query.id),
		{
			skip: !query.id
		}
	)

	return (
		<Layout title={video.name}>
			<div className={styles.layout}>
				<VideoPlayer videoPath={video.videoPath} />
			</div>
			<div className={cn(styles.layout, 'mt-7')}></div>
		</Layout>
	)
}

export default Video
