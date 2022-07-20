import { IVideo } from '@/types/video.interface'

import { axiosClassic } from '../api/axios'

export const VIDEO = 'video'

export const VideoService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}`)
	},

	async getMostPopular() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}/most-popular`)
	}
}
