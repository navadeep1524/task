import { DateTime } from 'luxon'
import { BaseModel, column,belongsTo } from '@adonisjs/lucid/orm'
import Assignment from './assignmnet.js'
import Student from './student.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'


export default class Submission extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
   @column()
  declare assignmentId: number

  @column()
  declare studentId: number

  @column()
  declare filePath: string

  @column()
  declare grade: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
   @belongsTo(() => Assignment)
  declare assignment: BelongsTo<typeof Assignment>

  @belongsTo(() => Student)
  declare student: BelongsTo<typeof Student>
}