import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'
import EduView from '../views/EduView.vue'
import OverView from '../views/OverView.vue'
import TableView from '../views/TableView.vue'
import ForgetView from '../views/ForgetView.vue'
import ConditionView from '../views/ConditionView.vue'

import CoursePro from '../views/CourseStaffviews/CoursePro.vue'
import CourseCreate from '../views/CourseStaffviews/CourseCreate.vue'
import StudentCourse from '../views/CourseStaffviews/StudentCourse.vue'

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

import TeachField from '../views/FieldTeacherviews/TeachField.vue'
import FieldStudentList1 from '../views/FieldTeacherviews/FieldStudentList1.vue'
import FieldStudentList2 from '../views/FieldTeacherviews/FieldStudentList2.vue'
import FieldStudentList3 from '../views/FieldTeacherviews/FieldStudentList3.vue'
import FieldStudentList4 from '../views/FieldTeacherviews/FieldStudentList4.vue'
import FieldStudentList5_8 from '../views/FieldTeacherviews/FieldStudentList5_8.vue'
import HeadField from '../views/FieldTeacherviews/HeadField.vue'

import Lecturer from '../views/Lecturerviews/Lecturer.vue'
import HeadLect from '../views/Lecturerviews/HeadLect.vue'
import LectStudentList1 from '../views/Lecturerviews/LectStudentList1.vue'
import LectStudentList2 from '../views/Lecturerviews/LectStudentList2.vue'
import LectStudentList3 from '../views/Lecturerviews/LectStudentList3.vue'
import LectStudentList4 from '../views/Lecturerviews/LectStudentList4.vue'
import LectStudentList5_8 from '../views/Lecturerviews/LectStudentList5_8.vue'

import Statistic from '../views/FacultyStaffviews/Statistic.vue'

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
      path: '/CoursePro',
      name: 'CoursePro',
      component: CoursePro,
    },
    {
      path: '/CourseCreate',
      name: 'CourseCreate',
      component: CourseCreate,
    },
    {
      path: '/StudentCourse',
      name: 'StudentCourse',
      component: StudentCourse,
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
    {
      path: '/TeachField',
      name: 'TeachField',
      component: TeachField,
    },
    {
      path: '/HeadField',
      name: 'HeadField',
      component: HeadField,
    },
    {
      path: '/FieldStudentList1',
      name: 'FieldStudentList1',
      component: FieldStudentList1,
    },
    {
      path: '/FieldStudentList2',
      name: 'FieldStudentList2',
      component: FieldStudentList2,
    },
    {
      path: '/FieldStudentList3',
      name: 'FieldStudentList3',
      component: FieldStudentList3,
    },
    {
      path: '/FieldStudentList4',
      name: 'FieldStudentList4',
      component: FieldStudentList4,
    },
    {
      path: '/FieldStudentList5-8',
      name: 'FieldStudentList5-8',
      component: FieldStudentList5_8,
    },
    {
      path: '/Lecturer',
      name: 'Lecturer',
      component: Lecturer,
    },
    {
      path: '/HeadLect',
      name: 'HeadLect',
      component: HeadLect,
    },
    {
      path: '/LectStudentList1',
      name: 'LectStudentList1',
      component: LectStudentList1,
    },
    {
      path: '/LectStudentList2',
      name: 'LectStudentList2',
      component: LectStudentList2,
    },
    {
      path: '/LectStudentList3',
      name: 'LectStudentList3',
      component: LectStudentList3,
    },
    {
      path: '/LectStudentList4',
      name: 'LectStudentList4',
      component: LectStudentList4,
    },
    {
      path: '/LectStudentList5-8',
      name: 'LectStudentList5-8',
      component: LectStudentList5_8,
    },
    {
      path: '/Statistic',
      name: 'Statistic',
      component: Statistic,
    },
  ],
})

export default router
