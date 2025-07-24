


import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'submissions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').primary()
      table.integer('assignment_id').unsigned().references('id').inTable('assignments')
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.string('file_path')
      table.integer('grade').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}