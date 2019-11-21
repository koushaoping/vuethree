import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import first from '@/components/first'
import two from '@/components/two'
import three from '@/components/three'
Vue.use(Router)
export default
new Router({
    mode: "history",
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
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
        }
    ]
})