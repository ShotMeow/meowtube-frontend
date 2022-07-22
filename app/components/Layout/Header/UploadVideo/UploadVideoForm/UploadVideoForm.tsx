import { FC } from 'react'
import { Controller } from 'react-hook-form'

import FooterForm from '@/components/Layout/Header/UploadVideo/UploadVideoForm/FooterForm/FooterForm'
import SuccessMessage from '@/components/Layout/Header/UploadVideo/UploadVideoForm/SuccessMessage'
import TogglePublic from '@/components/Layout/Header/UploadVideo/UploadVideoForm/TogglePublic/TogglePublic'
import VideoInformation from '@/components/Layout/Header/UploadVideo/UploadVideoForm/VideoInformation/VideoInformation'
import Field from '@/components/UI/Field/Field'
import TextArea from '@/components/UI/TextArea/TextArea'
import UploadField from '@/components/UI/UploadField/UploadField'

import { IMediaResponse } from '@/services/media/media.interface'

import { useUploadVideoForm } from '@/hooks/useUploadVideoForm'

import styles from '../UploadVideo.module.scss'

const UploadVideoForm: FC<{
	videoId: number
	handleCloseModal: () => void
}> = ({ videoId, handleCloseModal }) => {
	const { form, status, media } = useUploadVideoForm({
		videoId,
		handleCloseModal
	})
	return (
		<form
			onSubmit={form.handleSubmit(form.onSubmit)}
			className='flex flex-wrap'
		>
			{status.isSuccess && <SuccessMessage />}
			{status.isChosen ? (
				<>
					<div className='w-7/12 pr-6 pt-3'>
						<Field
							{...form.register('name', {
								required: 'Введите название видео'
							})}
							placeholder='Название'
							error={form.errors.name}
						/>
						<TextArea
							{...form.register('description', {
								required: 'Введите описание видео'
							})}
							placeholder='Описание'
							error={form.errors.description}
						/>
						<div className='mt-8'>
							<Controller
								control={form.control}
								name='thumbnailPath'
								render={({ field: { onChange } }) => (
									<UploadField
										folder='thumbnails'
										onChange={(value: IMediaResponse) => {
											onChange(value.url)
										}}
									/>
								)}
							/>
						</div>
						<Controller
							control={form.control}
							name='isPublic'
							render={({ field: { onChange, value } }) => (
								<TogglePublic
									clickHandler={() => {
										onChange(!value)
									}}
									isEnabled={!!value}
								/>
							)}
						/>
					</div>
					<div className='w-5/12 p-3 pl-10'>
						<VideoInformation
							fileName={media.videoFileName}
							videoId={videoId}
							isUploaded={status.isUploaded}
							thumbnailPath={media.thumbnailPath}
						/>
					</div>

					<FooterForm isUploaded={status.isUploaded} percent={status.percent} />
				</>
			) : (
				<div className={styles.uploadScreen}>
					<Controller
						control={form.control}
						name='videoPath'
						render={() => (
							<UploadField
								title='Сначала загрузите видео'
								folder='videos'
								onChange={media.handleUploadVideo}
								setValue={status.setProgressPercentage}
								setIsChosen={status.setIsChosen}
							/>
						)}
					/>
				</div>
			)}
		</form>
	)
}

export default UploadVideoForm
