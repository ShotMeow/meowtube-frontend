import { FC } from 'react'

import Layout from '../../Layout/Layout'

import Catalog from './Catalog/Catalog'
import Discover from './Discover/Discover'
import { IHome } from './Home.interface'

const Home: FC<IHome> = ({ randomVideo, topVideo, newVideos }) => {
	return (
		<Layout title='MeowTube'>
			<Discover topVideo={topVideo} randomVideo={randomVideo} />
			<Catalog newVideos={newVideos} />
		</Layout>
	)
}

export default Home
