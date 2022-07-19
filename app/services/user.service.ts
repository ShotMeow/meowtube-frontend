import { axiosClassic } from '../api/axios'
import { IUser } from '../types/user.interface'

export const USER = 'user'

export const UserService = {
	async getAll() {
		return axiosClassic.get<IUser[]>(`/${USER}`)
	},

	async getUser(id: number) {
		return axiosClassic.get<IUser>(`/${USER}/by-id/${id}`)
	}
}
