import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

import TogglePublic from '@/components/Layout/Header/UploadVideo/UploadVideoForm/TogglePublic/TogglePublic'
import VideoInformation from '@/components/Layout/Header/UploadVideo/UploadVideoForm/VideoInformation/VideoInformation'
import Layout from '@/components/Layout/Layout'
import Button from '@/components/UI/Button/Button'
import Field from '@/components/UI/Field/Field'
import Loader from '@/components/UI/Loader/Loader'
import TextArea from '@/components/UI/TextArea/TextArea'
import UploadField from '@/components/UI/UploadField/UploadField'

import { IMediaResponse } from '@/services/media/media.interface'

import { IVideoDto } from '@/types/video.interface'

import { videoApi } from '@/store/api/video.api'

const VideoEdit: FC = () => {
	const { push, query } = useRouter()
	const videoId = Number(query.id)

	const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
		skip: !videoId
	})

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IVideoDto>({
		mode: 'onChange'
	})

	useEffect(() => {
		if (!watch('id') && data) {
			setValue('name', data.name)
			setValue('description', data.description)
			setValue('videoPath', data.videoPath)
			setValue('thumbnailPath', data.thumbnailPath)
			setValue('isPublic', data.isPublic)
		}
	}, [data])

	const [updateVideo, { isLoading: isUpdateLoading }] =
		videoApi.useUpdateVideoMutation()

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo({ ...data, id: videoId })
			.unwrap()
			.then(() => {
				toastr.success('Статус', 'Видео обновлено!')
				push('/studio')
			})
	}

	return (
		<Layout title='Редактирование видео'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : (
					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-wrap'>
						<div className='w-7/12 pr-6 pt-8'>
							<Field
								{...register('name', {
									required: 'Измените название видео'
								})}
								placeholder='Название'
								error={errors.name}
							/>
							<TextArea
								{...register('description', {
									required: 'Измените описание видео'
								})}
								placeholder='Описание'
								error={errors.description}
							/>
							<div className='mt-8'>
								<Controller
									control={control}
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
							<div className='mt-8'>
								<span className='text-white mb-2 block'>Видео: </span>
								<Controller
									control={control}
									name='videoPath'
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
								control={control}
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
								fileName=''
								videoId={videoId}
								isUploaded
								thumbnailPath={watch('thumbnailPath')}
							/>
						</div>
						<div className='mt-10'>
							<Button>{isUpdateLoading ? 'Ожидайте...' : 'Сохранить'}</Button>
						</div>
					</form>
				)}
			</div>
		</Layout>
	)
}

export default VideoEdit
