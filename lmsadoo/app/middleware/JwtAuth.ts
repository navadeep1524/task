import { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken'

export default class JwtAuth {
  public async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    const authHeader = request.header('Authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return response.unauthorized({ message: 'Token missing' })
    }

    try {
      const secret = process.env.JWT_SECRET || 'navadeep_secret'
      const payload = jwt.verify(token, secret)

      
      request.updateBody({ jwtUser: payload })

      await next()
    } catch (err) {
      return response.unauthorized({ message: 'Invalid or expired token' })
    }
  }
}
