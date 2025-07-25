import router from '@adonisjs/core/services/router'
import authJwt from '#middleware/auth_jwt'

router.post('/signup', '#controllers/auth_controller.signup')
router.post('/login', '#controllers/auth_controller.login')

router.group(() => {
  router.get('/dashboard', 'StudentsController.getEnrolledCourses')
  router.get('/course/:id', 'StudentsController.getCourseDetails')
}).prefix('/api/student').use(authJwt)
