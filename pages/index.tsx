import { shuffle } from 'lodash'
import { GetStaticProps, NextPage } from 'next'

import { IHome } from '@/components/pages/Home/Home.interface'

import { VideoService } from '@/services/video.service'

import { IVideo } from '@/types/video.interface'

import Home from '../app/components/pages/Home/Home'

const HomePage: NextPage<IHome> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: newVideos } = await VideoService.getAll()
		// @ts-ignore
		const { data: topVideos } = JSON.stringify(
			await VideoService.getMostPopular()
		)
		return {
			props: {
				newVideos,
				topVideo: topVideos[0],
				randomVideo:
					shuffle(newVideos.filter(v => v.id !== topVideos[0].id))[0] ||
					({} as IVideo)
			} as IHome
		}
	} catch (error) {
		return {
			props: {
				newVideos: [],
				topVideo: {} as IVideo,
				randomVideo: {} as IVideo
			} as IHome
		}
	}
}

export default HomePage
