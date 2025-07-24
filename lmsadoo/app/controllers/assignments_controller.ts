import type { HttpContext } from '@adonisjs/core/http'
import Assignment from '#models/assignmnet'

export default class AssignmentsController {
  public async create({ request, response }: HttpContext) {
    const { jwtUser } = request.body()
    if (jwtUser.userType !== 'instructor') {
      return response.unauthorized({ message: 'Only instructors can create assignments' })
    }

    const { title, instructions, dueDate, courseId } = request.only([
      'title',
      'instructions',
      'dueDate',
      'courseId',
    ])
    const assignment = await Assignment.create({ title, instructions, dueDate, courseId })
    return response.created(assignment)
  }

  public async getCourseAssignments({ params }: HttpContext) {
    const courseId = params.courseId
    return await Assignment.query().where('course_id', courseId)
  }
}
