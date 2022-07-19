import { FC } from 'react'

import Layout from '../../Layout/Layout'

import Catalog from './Catalog/Catalog'
import Discover from './Discover/Discover'
import { IHome } from './Home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout title='MeowTube'>
			<Discover />
			<Catalog />
		</Layout>
	)
}

export default Home
