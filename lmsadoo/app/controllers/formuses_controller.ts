import type { HttpContext } from '@adonisjs/core/http'
import Formuse from '#models/formus'

export default class ForumController {
  public async create({ request }: HttpContext) {
    const { courseId, message } = request.only(['courseId', 'message'])
    const { jwtUser } = request.body()

    return await Formuse.create({
      courseId,
      message,
      userType: jwtUser.userType,
      userId: jwtUser.id,
    })
  }

  public async getMessages({ params }: HttpContext) {
    return await Formuse.query().where('course_id', params.courseId).orderBy('created_at', 'asc')
  }
}
