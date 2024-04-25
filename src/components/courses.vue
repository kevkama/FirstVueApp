<template>
    <div id="courses">
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
                            <v-card width="100%">
                                <template v-slot:title>
                                    {{ componentTitle }}
                                </template>
                                <template v-slot:text>
                                    <v-list 
                                    :items="courses" 
                                    item-title="courseName" 
                                    item-value="id"
                                    ></v-list>
                                </template>
                            </v-card>
                            <v-card width="400">
                                <v-card-item>
                                    <v-card-title>{{ componentTitle }}</v-card-title>
                                </v-card-item>

                                <v-card-text>
                                    <v-table>
                                        <thead>
                                        <tr>
                                            <th class="text-left">
                                            Name
                                            </th>
                                           
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                            v-for="users in myusers"
                                            :key="users.id"
                                        >
                                            <td>
                                                <v-btn to="/newcomponent" color="primary">{{ users.username }}</v-btn>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </v-table>
                                </v-card-text>
                                </v-card>
                        </div>
                    </v-row>
                </v-container>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import axios from "axios"
export default {
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
        return {
            courses: [
                {
                    id: 1,
                    courseName: 'Financial Economics'
                },
                {
                    id: 2,
                    courseName: 'Psychology'
                },
                {
                    id: 3,
                    courseName: 'Computer Science'
                },
                {
                    id: 4,
                    courseName: 'Financial engineering'
                },
                {
                    id: 5,
                    courseName: 'Medicine and Surgery'
                },
                {
                    id: 6,
                    courseName: 'Education'
                },
                {
                    id: 7,
                    courseName: 'Architecture'
                },
                {
                    id: 8,
                    courseName: 'Forestry'
                },
                {
                    id: 9,
                    courseName: 'Law'
                },
                {
                    id: 10,
                    courseName: 'Hospitality and Tourism'
                }
            ],
            componentTitle: 'Courses at Strath Uni'
        }
    },

    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event handlers in templates.
    methods: {
        async getMyUsers(){
        const apiUrl = 'http://127.0.0.1:8000/api/myusers'; // Replace with your API endpoint URL

        axios.get(apiUrl)
            .then((response) => {
                this.myusers = response.data;
                console.log(this.myusers)

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    },
        increment() {
            this.count++
        }
    },

    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
        console.log(`The initial count is ${this.count}.`)
        this.getMyUsers()
    }
}
</script>

