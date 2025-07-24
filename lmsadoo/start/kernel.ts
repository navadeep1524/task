/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import server from '@adonisjs/core/services/server'
import router from '@adonisjs/core/services/router'

/**
 * Error handler for exceptions
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * Server-level middleware (runs for every HTTP request)
 */
server.use([
  () => import('#middleware/container_bindings_middleware'),
  () => import('#middleware/force_json_response_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

/**
 * Router-level middleware (only runs for routes)
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
])

/**
 * Named middleware (used explicitly on routes)
 */
export const middleware = router.named({
  jwt: () => import('#middleware/JwtAuth'),
})
