import Vue from 'vue'
import Router from 'vue-router'
import Tezos from '@/components/Tezos'
import Loom from '@/components/Loom'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/tezos',
            name: 'Tezos',
            component: Tezos
        },
        {
            path: '/loom',
            name: 'Loom',
            component: Loom
        }
    ]
})