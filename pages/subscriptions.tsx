import Layout from '@/components/Layout/Layout'
import Menu from '@/components/Layout/Sidebar/Menu/Menu'

import { NextPageAuth } from '@/providers/private-route.interface'

import { api } from '@/store/api/api'

const Subscriptions: NextPageAuth = () => {
	const { data } = api.useGetProfileQuery(null)
	return (
		<Layout title='Мои подписки'>
			<Menu
				title='Мои подписки'
				items={
					data?.subscriptions.map(({ toChannel }) => ({
						title: toChannel.name,
						image: toChannel.avatarPath,
						link: `/c/${toChannel.id}`
					})) || []
				}
			/>
		</Layout>
	)
}

Subscriptions.isOnlyUser = true

export default Subscriptions
