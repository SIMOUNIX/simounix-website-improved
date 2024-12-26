import { createRouter, createWebHistory } from 'vue-router'

const DEFAULT_TITLE = 'simonthuaud'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/recipes',
      name: 'recipes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecipesView.vue'),
      meta: {
        title: 'recettes',
      },
    },
    {
      path: '/projects',
      name: 'projets',
      component: () => import('../views/WorkView.vue'),
      meta: {
        title: 'projets',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'à propos',
      },
    },
    {
      path: '/:catchAll(.*)', // catch all and redirect to home
      redirect: '/',
    },
  ],
})

// dynamically set the document title
router.beforeEach((to) => {
  if (!to.meta.title) {
    document.title = DEFAULT_TITLE
    return
  }

  document.title = DEFAULT_TITLE.concat(' - ', to.meta.title as string)
})

export default router
