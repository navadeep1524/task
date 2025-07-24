// app/Models/Course.ts

import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany} from '@adonisjs/lucid/orm'
import Instructor from './instructor.js'
import Assignment from './assignmnet.js'
import Formuse from './formus.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare instructorId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Instructor)
  declare instructor: BelongsTo<typeof Instructor>

  @hasMany(() => Assignment)
  declare assignments: HasMany<typeof Assignment>

  @hasMany(() => Formuse)
  declare forumPosts: HasMany<typeof Formuse>
}
