// app/controllers/auth_controller.ts

import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'
import Instructor from '#models/instructor'
import hash from '@adonisjs/core/services/hash'
import jwt from 'jsonwebtoken'

export default class AuthController {
  public async login({ request, response }: HttpContext) {
    const { email, password, userType } = request.only(['email', 'password', 'userType'])

    let user = null

    
    if (userType === 'student') {
      user = await Student.query().where('email', email).first()
    } else if (userType === 'instructor') {
      user = await Instructor.query().where('email', email).first()
    } else {
      return response.badRequest({ message: 'Invalid user type' })
    }


    if (!user || !(await hash.verify(user.password, password))) {
      return response.unauthorized({ message: 'Invalid email or password' })
    }


    const secret = process.env.JWT_SECRET || 'navadeep_secret'

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        userType: userType,
      },
      secret,
      { expiresIn: '1d' }
    )


    return response.ok({
      token,
      userType,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })
  }
}
