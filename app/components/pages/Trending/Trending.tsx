import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import Catalog from '@/components/pages/Home/Catalog/Catalog'

import { IVideo } from '@/types/video.interface'

const Trending: FC<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return (
		<Layout title='Тренды'>
			<Catalog newVideos={topVideos} />
		</Layout>
	)
}

export default Trending
