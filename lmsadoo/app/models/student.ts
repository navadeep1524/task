import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

    @column()
  declare name: string

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
    @beforeSave()
    static async hashPassword(student: Student) {
    if (student.$dirty.password) {
      student.password = await hash.make(student.password)
    }
  }
}