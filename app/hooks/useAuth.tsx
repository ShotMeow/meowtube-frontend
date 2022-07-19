import { IAuthData } from '../services/auth/auth.helper'

export const useAuth = (): IAuthData => ({
	user: null,
	accessToken: ''
})
