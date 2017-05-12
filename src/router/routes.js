/**
 * Created by ruoyang on 2017/5/9.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from  '../views/home.vue'
import ManageInfo from  '../views/ManageInfo.vue'
import UserInfo from  '../views/userInfo.vue'



const router = new VueRouter({
    mode:'hash' ,
    base:__dirname ,
    routes:[
        {
        path: '/home',
        name: 'home',
        component: Home
        },{
            path: '/manageInfo',
            name: 'manageInfo',
            component: ManageInfo
        },{
            path: '/userInfo',
            name: 'userInfo',
            component: UserInfo
        }

    ]
})


export default router
