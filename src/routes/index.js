import { createRouter,createWebHistory } from "vue-router";

import homePage from "./../components/homepage.vue";
import aboutUs from "./../components/aboutUs.vue";
import alumni from "./../components/alumni.vue";
import contactUs from "./../components/contactUs.vue";
import courses from "./../components/courses.vue";
import events from "./../components/events.vue";
import library from "./../components/library.vue";
import partnerships from "./../components/partnerships.vue";

const routes = [
    {
        path:'/',
        name:'Homepage',
        component: homePage,
    },

    {
        path:'/aboutus',
        name:'aboutUs',
        component: aboutUs,
    },

    {
        path:'/alumni',
        name:'alumni',
        component: alumni,
    },

    {
        path:'/contactus',
        name:'contactUs',
        component: contactUs,
    },

    {
        path:'/courses',
        name:'courses',
        component: courses,
    },

    {
        path:'/events',
        name:'events',
        component: events,
    },

    {
        path:'/library',
        name:'library',
        component: library,
    },

    {
        path:'/partnerships',
        name:'partnerships',
        component: partnerships,
    }
]
 const router = createRouter({
    history: createWebHistory(),
    routes
 })
 export default router