import { IBase } from './base.interface'
import { IUser } from './user.interface'
import { IVideo } from './video.interface'

export interface IComment extends IBase {
	user: IUser
	video: IVideo
	message: string
}

export interface ICommentDto extends Pick<IComment, 'message'> {
	videoId: number
}
