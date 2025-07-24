// app/Controllers/Http/StudentsController.ts

import type { HttpContext } from '@ioc:Adonis/Core/HttpContext'
import Submission from '../models/submission.js'
import Course from '../models/course.js'

export default class StudentsController {
  /**
   * GET /student/dashboard
   * Returns list of courses the student is enrolled in
   */
  public async dashboard({ auth, response }: HttpContext) {
    const student = auth.user!
    await student.load('courses')
    return response.ok(student.courses)
  }

  /**
   * GET /student/courses/:id/grades
   * Returns student's grades for a specific course
   */
  public async grades({ auth, params, response }: HttpContext) {
    const courseId = params.id

    const grades = await Submission
      .query()
      .where('studentId', auth.user!.id)
      .andWhere('courseId', courseId)
      .preload('assignment')

    return response.ok(grades)
  }
}
