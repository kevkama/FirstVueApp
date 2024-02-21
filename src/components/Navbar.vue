<script>
import homePage from "./homepage.vue"
import aboutUs from "./aboutUs.vue"
import alumni from "./alumni.vue"
import contactUs from "./contactUs.vue"
import courses from "./courses.vue"
import events from "./events.vue"
import library from "./library.vue"
import partnerships from "./partnerships.vue"
</script> 

<template>
    <v-app-bar color="teal">
        <div>
            <v-btn to="/" color="white" dark>Home</v-btn> 
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>About</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" color="white" dark>Alumni</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>Contact</v-btn>
        </div>
        <div>
            <v-btn to="/courses" color="white" dark>Courses</v-btn>
        </div>
        <div>
            <v-btn to="/events" color="white" dark>Events</v-btn>
        </div>
        <div>
            <v-btn to="/library" color="white" dark>Library</v-btn>
        </div>
        <div>
            <v-btn to="/partnerships" color="white" dark>Partnerships</v-btn>
        </div>
    </v-app-bar>
</template>