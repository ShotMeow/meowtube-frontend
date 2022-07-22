import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import Loader from '@/components/UI/Loader/Loader'
import Catalog from '@/components/pages/Home/Catalog/Catalog'

import { api } from '@/store/api/api'
import { videoApi } from '@/store/api/video.api'

const Studio: FC = () => {
	const { data, isLoading } = api.useGetProfileQuery(null)
	const [removeVideo] = videoApi.useDeleteVideoMutation()

	const videos = data?.videos

	return (
		<Layout title='Загрузить видео'>
			<div>
				{isLoading ? (
					<Loader count={5} />
				) : videos?.length ? (
					<Catalog
						newVideos={videos}
						removeHandler={removeVideo}
						isUpdateLink
					/>
				) : (
					<p>Видео не найдено</p>
				)}
			</div>
		</Layout>
	)
}

export default Studio
