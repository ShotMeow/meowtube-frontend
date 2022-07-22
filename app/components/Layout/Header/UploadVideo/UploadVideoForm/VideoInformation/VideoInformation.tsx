import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IVideoInformation } from '@/components/Layout/Header/UploadVideo/UploadVideoForm/VideoInformation/VideoInformation.interface'

import styles from './VideoInformation.module.scss'

const VideoInformation: FC<IVideoInformation> = ({
	videoId,
	thumbnailPath,
	fileName,
	isUploaded
}) => {
	return (
		<div className={styles.info}>
			{!thumbnailPath ? (
				<div className={styles.thumbnail}>
					{!isUploaded ? 'Идет загрузка видео...' : 'Загрузите превью'}
				</div>
			) : (
				<Image
					src={thumbnailPath}
					width={344}
					height={190}
					alt=''
					layout='responsive'
				/>
			)}
			<div className={styles.details}>
				<div>
					<span>Ссылка на видео</span>
					<span>
						<Link href={`/v/${videoId}`}>
							<a>http://local/v/{videoId}</a>
						</Link>
					</span>
				</div>
				<div>
					<span>Название видео</span>
					<span>{fileName}</span>
				</div>
			</div>
		</div>
	)
}

export default VideoInformation
