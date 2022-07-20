import { FC, useState } from 'react'

import { videoApi } from '@/store/api/video.api'

import stylesIcon from '../IconsRight/IconsRight.module.scss'

const UploadVideo: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [videoId, setVideoId] = useState<number>(0)

	const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation()
	return (
		<>
			<button
				className={stylesIcon.button}
				disabled={isLoading}
				onClick={() => {
					createVideo()
						.unwrap()
						.then(id => {
							setVideoId(+id)
							setIsOpen(true)
						})
				}}
			></button>
		</>
	)
}

export default UploadVideo
