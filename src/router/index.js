import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/frontend/Login.vue';
import DashBoard from '../views/backend/dashboard.vue';
import SignUp from '../views/frontend/signup.vue';
import Portfolio from '../views/frontend/Portfolio.vue';
import Admin from '../views/backend/admin.vue';
import Student from '../views/backend/student.vue';
import Management from '../views/backend/management.vue';
import AuthLayout from '../views/frontend/AuthLayout.vue';
import Users from '../views/backend/admin/Users.vue';
import BooKList from '../views/backend/admin/BookList.vue';
import BooKEntry from '../views/backend/admin/BookEntry.vue';
import AdminLayout from '../views/backend/admin/AdminLayout.vue';
import Profile from '../views/backend/admin/Profile.vue';
import NewEntry from '../views/backend/admin/NewEntry.vue';
import EntryList from '../views/backend/admin/EntryList.vue';
import BookLists from '../views/backend/student/BookList.vue';
import EntryDetails from '../views/backend/student/EntryDeatails.vue';
import StudentProfile from '../views/backend/student/StudentProfile.vue';
import StudentLayout from '../views/backend/student/StudentLayout.vue';
import ManagementLayout from '../views/backend/mangement/ManagementLayout.vue';
import ManagementEntryList from '../views/backend/mangement/ManagementEntryList.vue';
import ManagementProfile from '../views/backend/mangement/ManagementProfile.vue';
import ManagementNewEntry from '../views/backend/mangement/MangemnetNewEntry.vue';
import ManagementBookList from '../views/backend/mangement/MangementBooklist.vue';



const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: Admin
      },
      {
        path: 'users',
        name: 'users',
        component: Users
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'book-entry',
        name: 'BookEntry',
        component: BooKEntry
      },
      {
        path: 'book-list',
        name: 'BookList',
        component: BooKList
      },
      {
        path: 'entry-list',
        name: 'EntryList',
        component: EntryList
      },
      {
        path: 'new-entry',
        name: 'NewEntry',
        component: NewEntry
      },
    ],
  },
  {
    path: '/student',
    component: StudentLayout,
    children: [
      {
        path: '',
        name: 'student',
        component: Student
      },
      {
        path: 'student-profile',
        name: 'StudentProfile',
        component: StudentProfile
      },
      {
        path: 'entry-details',
        name: 'EntryDetails',
        component: EntryDetails
      },
      {
        path: 'book-list',
        name: 'Book-Lists',
        component: BookLists
      },
    ]
  },
  {
    path: '/management',
    component: ManagementLayout,
    children: [
      {
        path: '/',
        name: 'management',
        component: Management
      },
      {
        path: '/Management-Profile',
        name: 'ManagementProfile',
        component: ManagementProfile
      },
      {
        path: '/ManageMent-BookList-Profile',
        name: 'ManageMentBookList',
        component: ManagementBookList
      },
      {
        path: '/Management-Entry-List',
        name: 'ManagementEntryList',
        component: ManagementEntryList
      },
      {
        path: '/Management-New-Entry',
        name: 'ManagementNewEntry',
        component: ManagementNewEntry
      },

    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'signup',
        name: 'signUp',
        component: SignUp
      },
    ],
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
