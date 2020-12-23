import { loadComponent } from "../../../../utils/route"

const routes = {
  path: '/figure',
  component: loadComponent(() => import('./index')),
  routes: [
    {
      path: '/figure/new_tpl',
      component: loadComponent(() => import('./new_tpl'))
    },
    {
      path: '/figure/edit_tpl',
      component: loadComponent(() => import('./edit_tpl'))
    }
  ]
}

export default routes