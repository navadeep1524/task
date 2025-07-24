import router from '@adonisjs/core/services/router'

router.post('/login', 'AuthController')

router.group(() => {
  router.get('/dashboard', 'StudentsController.dashboard')            
  router.get('/courses/:id', 'CoursesController.detail')              
  router.get('/courses/:id/videos', 'CoursesController.videos')       
  router.get('/courses/:id/exercises', 'CoursesController.exercises') 
  router.get('/courses/:id/grades', 'StudentsController.grades')      
  router.get('/courses/:id/assignments', 'AssignmentsController.list')
  router.post('/assignments/:id/submit', 'SubmissionsController.submit') 
  router.get('/courses/:id/forums', 'ForumsController.list')         
  router.post('/courses/:id/forums', 'ForumsController.create')       
})
  .prefix('/student')
  .middleware([() => import('#middleware/JwtAuth')]) 