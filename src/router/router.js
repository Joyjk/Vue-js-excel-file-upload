import {createWebHistory, createRouter} from 'vue-router' ;
//  import SimpleUpload from '@/components/SimpleUpload.vue';

const SimpleUpload = import('@/components/simpleUpload.vue')
const pic = import('@/components/Picture.vue')

const history = createWebHistory();
const router = createRouter({
    history,
    routes:[
        {
            path:'/home',
            component: SimpleUpload
        },
        {
            path:'/pic',
            component: pic
        }
    ]
})

export default router;