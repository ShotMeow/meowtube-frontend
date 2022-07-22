export interface IAuthFields {
	email: string
	password: string
}

export interface IRegFields extends IAuthFields {
	name: string
}
