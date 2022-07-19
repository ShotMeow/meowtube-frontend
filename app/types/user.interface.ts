import { IBase } from './base.interface'
import { IVideo } from './video.interface'

export interface IUser extends IBase {
	email: string
	password: string
	isVerified?: boolean
	subscribersCount?: number
	description: string
	avatarPath: string
	videos?: IVideo[]
	subscriptions: ISubscription[]
}

interface ISubscription extends IBase {
	toChannel: IUser
}
