export const database = {
	channels: [
		{
			name: 'Первый канал',
			img: '/assets/images/logotypes/first-channel.png',
			program: [
				{
					time: '13:00',
					name:'Новости (с субтитрами)',
				},
				{
					time: '14:00',
					name:'Давай поженимся',
				},
				{
					time: '15:00',
					name:'Другие новости',
				},
				
			]
		},
		{
			name: '2x2',
			img: '/assets/images/logotypes/2x2-channel.png',
			program: [
				{
					time: '13:00',
					name:'МУЛЬТ ТВ. Сезон 4, 7 серия',
				},
				{
					time: '14:00',
					name:'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
				},
				{
					time: '15:00',
					name:'БУРДАШЕВ. Сезон 1, 20 серия',
				},
				
			]
		},
		{
			name: 'РБК',
			img: '/assets/images/logotypes/rbc-channel.png',
			program: [
				{
					time: '13:00',
					name:'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
				},
				{
					time: '14:00',
					name:'ДЕНЬ. Главные темы',
				},
				{
					time: '15:00',
					name:'Главные новости',
				},
				
			]
		},
		{
			name: 'AMEDIA PREMIUM',
			img: '/assets/images/logotypes/amedia-channel.png',
			program: [
				{
					time: '13:00',
					name:'Клиент всегда мёртв',
				},
				{
					time: '14:00',
					name:'Голодные игры: Сойка-пересмешница. Часть I',
				},
				{
					time: '15:00',
					name:'Секс в большом городе',
				},
				
			]
		}
	],
	films:[
		{
			name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
			img: '/assets/images/movieCards/cat-pic.jpg',
			description: 'Описание фильма',
		},
		{
			name: 'Новый Бэтмен',
			img: '/assets/images/movieCards/new-batman.png',
			description: 'Описание фильма',
		},
		{
			name: 'Однажды... в Голливуде',
			img: '/assets/images/movieCards/hollywood.png',
			description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
		},
		{
			name: 'Стриптизёрши',
			img: '/assets/images/movieCards/strippers.png',
			description: 'Описание фильма',
		},
	],
	users: [
		{
			id: 1,
			username: 'Kostya1996',
			password: '1234',
			firstName: 'Константин',
			lastName:  'Константинов',
		},
		{
			id: 2,
			username: '123',
			password: '123',
			firstName: 'Константин',
			lastName:  'Константинов',
		}
	]
};