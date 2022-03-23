import {createWebHistory, createRouter} from 'vue-router' ;
//  import SimpleUpload from '@/components/SimpleUpload.vue';

const SimpleUpload = import('@/components/simpleUpload.vue')
const pic = import('@/components/Picture.vue')
const singlepic = import('@/components/SinglePage.vue')
const pictureLoad = import('@/components/PictureLoad.vue')

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
        },
        {
            path:'/singlepic/:id',
            component: singlepic
        },
        {
            path:'/picload',
            component: pictureLoad
        },
    ]
})

export default router;