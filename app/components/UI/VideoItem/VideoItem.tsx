import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

import UserAvatar from '@/components/UI/UserAvatar/UserAvatar'
import VideoDuration from '@/components/UI/VideoItem/VideoDuration'
import { IVideoItem } from '@/components/UI/VideoItem/VideoItem.interface'
import VideoStatistics from '@/components/UI/VideoItem/VideoStatistics'

import styles from './VideoItem.module.scss'

const VideoItem: FC<IVideoItem> = ({
	isSmall,
	isUpdateLink,
	removeHandler,
	item
}) => {
	const { push } = useRouter()
	return (
		<div
			className={cn(styles.video_item, {
				[styles.small]: isSmall
			})}
		>
			{!!removeHandler && (
				<button
					className='absolute bottom-3 right-3 z-10'
					onClick={() => removeHandler(item.id)}
				>
					<BiTrash className='text-lg text-red-700' />
				</button>
			)}
			{isUpdateLink && (
				<button
					className='absolute bottom-3 right-11 z-10'
					onClick={() => push(`/video/edit/${item.id}`)}
				>
					<BiEdit className='text-lg text-blue-600' />
				</button>
			)}

			<div className={styles.thumbnail}>
				{item.thumbnailPath && (
					<Image
						src={item.thumbnailPath}
						alt={item.name}
						width={185}
						height={103}
						layout='responsive'
						priority
					/>
				)}
				<VideoDuration duration={item.duration} />
				{item?.user?.avatarPath && (
					<div className='absolute right-3 -bottom-7'>
						<UserAvatar user={item.user} />
					</div>
				)}
			</div>

			<div className={styles.information}>
				{!isSmall && <div className={styles.author}>{item.user?.name}</div>}
				<Link href={`/v/${item.id}`}>
					<a className={styles.name}>{item.name}</a>
				</Link>
				<VideoStatistics
					views={item.views}
					createdAt={!isSmall ? item.createdAt : undefined}
				/>
			</div>
		</div>
	)
}

export default VideoItem
