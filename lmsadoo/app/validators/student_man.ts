import vine from '@vinejs/vine'

export const createStudentValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6),
  })
)

export const updateStudentValidator = vine.compile(
  vine.object({
    id: vine.number().positive(), 
    name: vine.string().trim().minLength(2).maxLength(100),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6),
  })
)

export const patchStudentValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100).optional(),
    email: vine.string().trim().email().optional(),
    password: vine.string().trim().minLength(6).optional(),
  })
)

export const getStudentByFieldsValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).optional(),
    email: vine.string().trim().email().optional(),
  })
)
