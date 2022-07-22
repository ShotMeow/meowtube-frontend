import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Channel from '@/components/pages/Channel/Channel'
import { IChannel } from '@/components/pages/Channel/Channel.interface'

import { UserService } from '@/services/user.service'

import { IUser } from '@/types/user.interface'

const ChannelPage: NextPage<IChannel> = ({ channel }) => {
	return <Channel channel={channel} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: users } = await UserService.getAll()
		const paths = users.map(user => ({
			params: {
				id: String(user.id)
			}
		}))

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: channel } = await UserService.getUser(Number(params?.id))

		return {
			props: {
				channel
			} as IChannel
		}
	} catch (error) {
		return {
			props: {
				channel: {} as IUser
			} as IChannel
		}
	}
}

export default ChannelPage
