import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import EduView from '../views/EduView.vue'
import OverView from '../views/OverView.vue'
import TableView from '../views/TableView.vue'
import ForgetView from '../views/ForgetView.vue'
import TeachPro from '../views/TeachPro.vue'
import ConditionView from '../views/ConditionView.vue'
import AdminPro from '../views/AdminPro.vue'
import Add from '../views/Add.vue'
import AdStudent from '../views/AdStudent.vue'
import StudentList1 from '../views/StudentList1.vue'
import StudentList2 from '../views/StudentList2.vue'
import StudentList3 from '../views/StudentList3.vue'
import StudentList4 from '../views/StudentList4.vue'
import StudentList5_8 from '../views/StudentList5_8.vue'

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
  ],
})

export default router
