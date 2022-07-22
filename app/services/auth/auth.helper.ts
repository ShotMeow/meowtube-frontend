export interface IAuthData {
	user: {
		id: number
		name: string
		email: string
	} | null
	accessToken: string
}
