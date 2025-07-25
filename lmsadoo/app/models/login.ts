import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'

export default class Login extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
   @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare role: 'student' | 'instructor'

  @column({ serializeAs: null })
  declare password: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @beforeSave()
  static async hashPassword(user: Login) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password)
    }
  }
}