import { axiosClassic } from '../api/axios'
import { IVideo } from '../types/video.interface'

export const VIDEO = 'video'

export const UserService = {
	async getAll() {
		return axiosClassic.get<IVideo[]>(`/${VIDEO}`)
	},

	async getMostPopular() {
		return axiosClassic.get<IVideo>(`/${VIDEO}/most-popular`)
	}
}
