import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import EduView from '../views/EduView.vue'
import OverView from '../views/OverView.vue'
import TableView from '../views/TableView.vue'
import ForgetView from '../views/ForgetView.vue'
import ConditionView from '../views/ConditionView.vue'
import AdminPro from '../views/AdminPro.vue'
import Add from '../views/Add.vue'
import AdStudent from '../views/AdStudent.vue'
import TeachPro from '../views/Teacherviews/TeachPro.vue'
import StudentList1 from '../views/Teacherviews/StudentList1.vue'
import StudentList2 from '../views/Teacherviews/StudentList2.vue'
import StudentList3 from '../views/Teacherviews/StudentList3.vue'
import StudentList4 from '../views/Teacherviews/StudentList4.vue'
import StudentList5_8 from '../views/Teacherviews/StudentList5_8.vue'
import TeachChair from '../views/TeacherChairviews/TeachChair.vue'
import ChairStudentList1 from '../views/TeacherChairviews/ChairStudentList1.vue'
import ChairStudentList2 from '../views/TeacherChairviews/ChairStudentList2.vue'
import ChairStudentList3 from '../views/TeacherChairviews/ChairStudentList3.vue'
import ChairStudentList4 from '../views/TeacherChairviews/ChairStudentList4.vue'
import ChairStudentList5_8 from '../views/TeacherChairviews/ChairStudentList5_8.vue'
import ChairField from '../views/TeacherChairviews/ChairField.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Education',
      name: 'Education',
      component: EduView,
    },
    {
      path: '/Overall',
      name: 'Overall',
      component: OverView,
    },
    {
      path: '/Table',
      name: 'Table',
      component: TableView,
    },
    {
      path: '/Forgot',
      name: 'Forgot',
      component: ForgetView,
    },
    {
      path: '/TeachPro',
      name: 'TeachPro',
      component: TeachPro,
    },
    
    {
      path: '/Condition',
      name: 'Condition',
      component: ConditionView,
    },
    {
      path: '/StudentList1',
      name: 'StudentList1',
      component: StudentList1,
    },
    {
      path: '/StudentList2',
      name: 'StudentList2',
      component: StudentList2,
    },
    {
      path: '/StudentList3',
      name: 'StudentList3',
      component: StudentList3,
    },
    {
      path: '/StudentList4',
      name: 'StudentList4',
      component: StudentList4,
    },
    {
      path: '/StudentList5-8',
      name: 'StudentList5-8',
      component: StudentList5_8,
    },
    {
      path: '/AdminPro',
      name: 'AdminPro',
      component: AdminPro,
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/AdStudent',
      name: 'AdStudent',
      component: AdStudent,
    },
    {
      path: '/TeachChair',
      name: 'TeachChair',
      component: TeachChair,
    },
    {
      path: '/ChairStudentList1',
      name: 'ChairStudentList1',
      component: ChairStudentList1,
    },{
      path: '/ChairStudentList2',
      name: 'ChairStudentList2',
      component: ChairStudentList2,
    },{
      path: '/ChairStudentList3',
      name: 'ChairStudentList3',
      component: ChairStudentList3,
    },{
      path: '/ChairStudentList4',
      name: 'ChairStudentList4',
      component: ChairStudentList4,
    },{
      path: '/ChairStudentList5-8',
      name: 'ChairStudentList5-8',
      component: ChairStudentList5_8,
    },
    {
      path: '/ChairField',
      name: 'ChairField',
      component: ChairField,
    },
  ],
})

export default router
