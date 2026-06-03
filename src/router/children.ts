import ParamsDemo from '../components/routerChild/params.vue'
import queryDemo from '../components/routerChild/query.vue'


export const routerChild = [
    {
        id: 1,
        key: 'params',
        name: 'params 路由',
        path: 'params/:name?/:age?',
        type: 'params',
        meta: { title: 'params 路由' },
        component: ParamsDemo
    },
    {
        id: 2,
        key: 'query',
        name: 'query 路由',
        path: 'query',
         type: 'query',
        meta: { title: 'query 路由' },
        component: queryDemo

    },
    // {
    //     id: 3,
    //     key: 'propsPage',
    //     name: 'Props Page 路由',
    //     path: 'props-page',
    //     meta: { title: 'Props Page 路由' }
    // },
    // {
    //     id: 4,
    //     key: 'demoRoute',
    //     name: 'Demo 路由',
    //     path: 'demo',
    //     meta: { title: 'Demo 路由' }
    // }
]