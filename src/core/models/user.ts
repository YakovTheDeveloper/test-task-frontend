export type DatabaseUser = {
	id: number
	username: string
	password: string
	firstName: string
	lastName: string
}

export type UserWithoutCredentials = {
	id: number
	firstName: string
	lastName: string
}