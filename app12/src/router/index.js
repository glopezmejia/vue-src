import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import LeaflineView from '../views/LeaflineView.vue'
import SwirlView from '../views/SwirlView.vue'
import DriftView from '../views/DriftView.vue'
import StarView from '../views/StarView.vue'
import SpaceView from '../views/SpaceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items/',
      component: ItemsView, 
      children: [
        {
          path: 'leafline', 
          component: LeaflineView
        },
        // {
        //   path: 'leafline/:id', 
        //   component: LeaflineView
        // },
        {
          path: 'swirl',
          component: SwirlView
        },
        {
          path: 'drift',
          component: DriftView
        },
        {
          path: 'star',
          component: StarView
        },
        {
          path: 'space',
          component: SpaceView
        }
      ]
    }
    

  ]
})

export default router
