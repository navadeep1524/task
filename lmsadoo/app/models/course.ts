// app/Models/Course.ts

import { DateTime } from 'luxon'
import { BaseModel, column,  hasMany} from '@adonisjs/lucid/orm'
import Formuse from './formus.js'
import Assignment from './assignmnet.js'

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



@hasMany(() => Assignment)
declare assignments: HasMany<typeof Assignment>

@hasMany(() => Formuse)
declare forums: HasMany<typeof Formuse>

}
