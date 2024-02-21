<template>
    <div id='homepage'>
        <v-container>
            <v-layout column>
                <v-carousel>
                    <v-carousel-item
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        cover></v-carousel-item>

                    <v-carousel-item
                        src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        cover></v-carousel-item>

                    <v-carousel-item
                        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        cover></v-carousel-item>
                </v-carousel>
            </v-layout>
            <v-layout>
                <v-container>
                    <v-row align="center" justify="center">
                        <div class="d-flex align-center flex-column">
                            <div class="text-subtitle-2">With props</div>

                            <v-card width="100%" title="Accomodation" subtitle="internal"
                                text="The internal university accommodations offer a remarkable blend of comfort, convenience, and community, elevating the student experience to unparalleled heights. From cozy dormitories to modern apartments, these accommodations provide a welcoming haven where students can immerse themselves fully in the academic journey. With well-equipped study lounges, high-speed internet access, and communal spaces designed for collaboration, students have everything they need at their fingertips to excel academically and socially. Moreover, the proximity to campus facilities and resources streamlines daily life, allowing students to maximize their time and energy towards their studies and personal growth. Beyond the physical amenities, these accommodations foster a sense of belonging and camaraderie, creating lifelong friendships and cherished memories. In essence, the internal university accommodations not only meet the practical needs of students but also cultivate a supportive environment conducive to holistic development and flourishing success."></v-card>

                            <div class="mt-4 text-subtitle-2">With slots</div>

                            <v-card width="100%">
                                <template v-slot:title>
                                    Sports
                                </template>

                                <template v-slot:subtitle>
                                    Take your pick
                                </template>

                                <template v-slot:text>
                                    The university boasts a diverse array of sports offerings, catering to the wide-ranging
                                    interests and passions of its student body. From traditional team sports like
                                    basketball, soccer, and volleyball to niche activities such as rock climbing, fencing,
                                    and ultimate frisbee, there's something for everyone to enjoy. Whether students aspire
                                    to compete at an elite level or simply seek recreational fun and fitness, the university
                                    provides ample opportunities for participation and skill development. With
                                    state-of-the-art facilities, experienced coaching staff, and a vibrant sports culture,
                                    students are empowered to pursue their athletic goals while forging lifelong connections
                                    and fostering a sense of community. In essence, the university's comprehensive sports
                                    program embodies its commitment to holistic student development, promoting physical
                                    well-being, teamwork, and personal growth.
                                </template>
                            </v-card>

                            <div class="mt-4 text-subtitle-2">With markup</div>

                            <v-card width="100%">
                                <v-card-item>
                                    <v-card-title>Student life</v-card-title>

                                    <v-card-subtitle>Community</v-card-subtitle>
                                </v-card-item>

                                <v-card-text>
                                    "Student Life: Building a Vibrant Community" encapsulates the dynamic essence of
                                    university existence, extending far beyond academics. It thrives on the foundation of
                                    diverse connections, where friendships flourish, mentors guide, and passions ignite
                                    spirited debates. Within this inclusive ecosystem, students embrace cultural diversity
                                    and foster understanding through shared experiences and projects. As they navigate
                                    academic challenges and pursue personal growth, they find themselves in a crucible of
                                    intellectual exploration, supported by peers and faculty alike. In essence, student life
                                    epitomizes the transformative power of community, shaping individuals and fostering
                                    lifelong connections.
                                </v-card-text>
                            </v-card>
                        </div>
                    </v-row>
                </v-container>
            </v-layout>
        </v-container>
    </div>
</template>
<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>