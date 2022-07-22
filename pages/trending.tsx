import { GetStaticProps, NextPage } from 'next'

import { VideoService } from '@/services/video.service'

import { IVideo } from '@/types/video.interface'

const Trending: NextPage<{ topVideos: IVideo[] }> = ({ topVideos }) => {
	return <Trending topVideos={topVideos} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: topVideos } = await VideoService.getMostPopular()

		return {
			props: {
				topVideos
			},
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				topVideos: []
			}
		}
	}
}

export default Trending
