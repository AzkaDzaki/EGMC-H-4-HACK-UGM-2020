import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import tes from '../components/tes.vue'
import FormPasien from '../views/FormPasienPage.vue'
import RiwayatLayanan from '../views/RiwayatLayananPage.vue'
import Tiket from '../views/TiketPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import EditForm from '../components/EditFormPasien.vue'
import AdminConfirm from '../components/AdminConfirm.vue'
import AdminHome from '../views/AdminHome.vue'
import DokterRiwayatLayanan from '../components/DokterRiwayatLayanan.vue'
import DokterFormPasien from '../components/DokterFormPasien.vue'
import DetailFormPasienFinish from '../components/DetailFormPasienFinish.vue'
import TabelCovid from '../views/TabelCovid.vue'
import AdminServiceEdit from '../views/AdminServiceEdit.vue'
import AdminStatistik from '../views/AdminStatistik.vue'

import * as firebase from 'firebase'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/tes',
    name: 'tes',
    component: tes
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: FormPasien,

  },
  {
    path: '/riwayat-layanan',
    name: 'RiwayatLayananPage',
    component: RiwayatLayanan,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/tiket-pesanan',
    name: 'TiktePage',
    component: Tiket,
    meta: {
      requiresAuth: true
   }
  },
  {
    path: '/info-finsih',
    name: 'DetailFormPasienFinish',
    component: DetailFormPasienFinish
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
 },
 {
  path: '/registrasi',
  name: 'registrasi',
  component: Register,
 },
 {
   path: '/edit-form-pesanan',
   name: 'edit-form-pesanan',
   component: EditForm
 },
 {
   path: '/admin/confirm',
   name: 'admin-confirm',
   component: AdminConfirm
 },
 {
   path: '/admin/home',
   name: 'admin-home',
   component: AdminHome
 },
 {
   path: '/admin/edit-service',
   name: 'admin-edit-service',
   component: AdminServiceEdit
 },
 {
   path: '/admin/statistik-pengunjung',
   name: 'admin-statistik-pengunjung',
   component: AdminStatistik
 },
 {
   path: '/dokter/riwayat-layanan',
   name: 'dokter-riwayat-layanan',
   component: DokterRiwayatLayanan
 },
 {
   path: '/dokter/form-pasien',
   name: 'dokter-form-pasien',
   component: DokterFormPasien
 },
 {
   path: '/tabel-covid',
   name: 'tabel-covid',
   component: TabelCovid
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
