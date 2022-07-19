export interface IAuthData {
	user: {
		id: number
		email: string
	} | null
	accessToken: string
}
