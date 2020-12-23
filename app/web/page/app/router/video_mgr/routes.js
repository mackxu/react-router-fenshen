import { loadComponent } from "../../../../utils/route"

const routes = {
  path: '/video',
  component: loadComponent(() => import('./index')),
  routes: [
    {
      path: '/video/list',
      component: loadComponent(() => import('./list'))
    },
    {
      path: '/video/make',
      component: loadComponent(() => import('./make'))
    }
  ]
}

export default routes