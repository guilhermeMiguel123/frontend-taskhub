import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import TaskList from '../components/TaskList.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,  // Página de login
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TaskList,  // Página de lista de tarefas
    meta: { requiresAuth: true },  // Exige autenticação
  },
  {
    path: '/',
    redirect: '/login',  // Redireciona para a página de login por padrão
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Verifica se a rota requer autenticação
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');  // Verifica se o usuário está logado
    if (!token) {
      next('/login');  // Se não estiver logado, redireciona para login
    } else {
      next();  // Se estiver logado, segue para a página de tarefas
    }
  } else {
    next();  // Se não requer autenticação, segue normalmente
  }
});

export default router;
