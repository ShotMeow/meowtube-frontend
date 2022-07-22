import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import ChannelInfoSmall from '@/components/UI/ChannelInfoSmall/ChannelInfoSmall'
import SubscribeButton from '@/components/UI/SubscribeButton/SubscribeButton'
import { IChannel } from '@/components/pages/Channel/Channel.interface'
import Catalog from '@/components/pages/Home/Catalog/Catalog'

const Channel: FC<IChannel> = ({ channel }) => {
	return (
		<Layout title={channel.name}>
			<div className='mb-10 w-1/3'>
				<div className='flex items-center gap-12'>
					<ChannelInfoSmall channel={channel} />
					<SubscribeButton channelIdForSubscribe={channel.id} />
				</div>
				<article className='text-gray-500 mt-3'>{channel.description}</article>
			</div>
			<Catalog newVideos={channel.videos || []} />
		</Layout>
	)
}

export default Channel
