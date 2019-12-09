import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import two from '@/components/two'
import three from '@/components/three'
import teacher from '@/components/teacher'
import find from '@/components/find'
import login from '@/components/login'
import info from '@/components/info'
import regis from '@/components/regis'
import goods from '@/components/goods'
import jz from '@/components/jz'

Vue.use(Router)
export default new Router({
    mode: "history",
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/first',
            name: 'first',
            component: first
        },
        {
            path: '/two',
            name: 'two',
            component: two
        },
        {
            path: '/three',
            name: 'three',
            component: three
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: teacher
        },
        {
            path: '/find',
            name: 'find',
            component: find
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/info',
            name: 'info',
            component: info
        },
        {
            path: '/',
            name: 'regis',
            component: regis
        },
        {
            path: '/jz',
            name: 'jz',
            component: jz
        },
        {
            path: '/goods',
            name: 'goods',
            component: goods
        }
    ]
})