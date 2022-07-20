import { IVideo } from '@/types/video.interface'

export interface IVideoItem {
	item: IVideo
	removeHandler?: (videoId: number) => void
	isUpdateLink?: boolean
	isSmall?: boolean
}
