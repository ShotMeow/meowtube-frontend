import { axiosClassic } from '../../api/axios'

import { IAuthData } from './auth.helper'

const AUTH = 'auth'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`/${AUTH}/login`, {
			email,
			password
		})

		return response.data
	},

	async register(name: string, email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`/${AUTH}/register`, {
			name,
			email,
			password
		})

		return response.data
	}
}
