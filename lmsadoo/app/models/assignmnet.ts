import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Course from './course.js'
import Submission from './submission.js'
export default class Assignmnet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
   @column()
  declare courseId: number

  @column()
  declare title: string

  @column()
  declare instructions: string
   @column.dateTime()
  declare dueDate: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

   @belongsTo(() => Course)
  declare course: BelongsTo<typeof Course>

  @hasMany(() => Submission)
  declare submissions: HasMany<typeof Submission>
}