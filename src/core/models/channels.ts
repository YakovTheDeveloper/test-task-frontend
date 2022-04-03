
export type ChannelType = {
	name: string
	img: string
	program: ProgramItem[]
}

type ProgramItem = {
	time: string,
	name: string
}