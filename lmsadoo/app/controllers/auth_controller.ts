import type { HttpContext } from '@adonisjs/core/http'
import jwt, { Secret } from 'jsonwebtoken'
import User from '../models/login.js'
import hash from '@adonisjs/core/services/hash'

export default class AuthController {
  public async signup({ request, response }: HttpContext) {
    const { name, email, password, role } = request.only(['name', 'email', 'password', 'role'])

    const exists = await User.query().where('email', email).first()
    if (exists) {
      return response.conflict({ message: 'Email already exists' })
    }

    const user = await User.create({ name, email, password, role })

    const secret: Secret = process.env.JWT_SECRET || 'fallback_secret'
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, secret)

    return response.created({
      token,
      role: user.role,
      message: 'Signup successful',
    })
  }

  public async login({ request, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.query().where('email', email).first()
    if (!user || !(await hash.verify(user.password, password))) {
      return response.unauthorized({ message: 'Invalid email or password' })
    }

    const secret: Secret = process.env.JWT_SECRET || 'fallback_secret'
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, secret)

    return response.ok({
      token,
      role: user.role,
      message: 'Login successful',
    })
  }
}
