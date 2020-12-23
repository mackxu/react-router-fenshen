import Root from './root'
import { loadComponent } from '../../../utils/route'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: loadComponent(() => import('./home')),
      },
      {
        path: '/login',
        exact: true,
        component: loadComponent(() => import('./login')),
      },
      require('./figure_mgr/routes').default,
      require('./video_mgr/routes').default
    ]
  }
]

export default routes