import Main from './components/Main.vue'
// import Lec from './components/Lec.vue'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Join from './components/Join.vue'
// import Login from './components/Login.vue'
import List from './components/List.vue'
import Enroll from './components/Enroll.vue'
import EnrollRegister from './components/Enroll_register.vue'
import EnrollRegisterDetail from './components/Enroll_registerdetail.vue'
import EnrollRegisterMyinfo from './components/Enroll_myinfo.vue'
import EnrollRegisterTutor from './components/Enroll_tutor.vue'


// import LecMap from './components/Lec_map.vue'
const Lec = r => require.ensure([], () => r(require('./components/Lec.vue')), 'group-foo')
const Header = r => require.ensure([], () => r(require('./components/Header.vue')), 'group-foo')
const Footer = r => require.ensure([], () => r(require('./components/Footer.vue')), 'group-foo')
const Join = r => require.ensure([], () => r(require('./components/Join.vue')), 'group-foo')
const Login = r => require.ensure([], () => r(require('./components/Login.vue')), 'group-foo')


// const Lec = resolve => require(['./components/Lec.vue'], 'group-lec')
// const Header = resolve => require(['./components/Header.vue'], 'group-lec')
// const Footer = resolve => require(['./components/Footer.vue'], 'group-lec')
// const Join = resolve => require(['./components/Join.vue'], 'group-lec')
// const Login = resolve => require(['./components/Login.vue'], 'group-lec')



export const routes = [

  {
    path: '',
    name: 'main',
    components: {
      'default': Main,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,
    },
  },
  {
    path: '/lec/:lecid',
    name: 'lec',
    components: {
      'default': Lec,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,
      // 'map': LecMap
    },
  },

  {
    path: '/list',
    name: 'list',
    components: {
      'default': List,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,
    },
  },
  {
    path: '/enroll/',
    name: 'enroll',
    components: {
      'default': Enroll,
      'header': Header,
      'footer': Footer,
      'join': Join,
      'login': Login,
    },
    children: [
    // { path: '', component: UserStart },
    { path: 'registertutor', component: EnrollRegisterTutor, name: 'tutor' },
    { path: 'registerMyinfo', component: EnrollRegisterMyinfo, name: 'myinfo'},
    { path: 'register', component: EnrollRegister },
    { path: 'registerDetail', component: EnrollRegisterDetail}
  ]
  },


  {
    path: '*', redirect: '/'
  },
]
