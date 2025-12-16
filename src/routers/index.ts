import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/HelloWorld.vue';
import { useAuthStore } from '../stores/auth';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home, meta: {requireAuth: true} , name: 'Home'},
        { path: '/', component: Login, name: 'Login', meta: {redirectAuth: true} },
    ]
});

router.beforeEach(async (to, from, next)=>{
    const authStore = useAuthStore();

    if(!authStore.status){
        await authStore.checkAuth();
    }

    if(to.meta.requireAuth && !authStore.status){
        next({path: '/'})
    }else{
        if(to.meta.redirectAuth){
            next({path: '/home'})
        }else{
            next()
        }
    }

})

export default router;