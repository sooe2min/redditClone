import { Post } from './entities/Post'
import { User } from './entities/User'
import { __prod__ } from './constants'
import { MikroORM } from '@mikro-orm/core'
import path from 'path'

export default {
	migrations: {
		path: path.join(__dirname, './migrations'),
		pattern: /^[\w-]+\d+\.[tj]s$/
	},
	entities: [Post, User],
	dbName: 'lireddit',
	type: 'postgresql',
	debug: !__prod__,
	user: 'postgres',
	password: 'e2e2'
} as Parameters<typeof MikroORM.init>[0]
