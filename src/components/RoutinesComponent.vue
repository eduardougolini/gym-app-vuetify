<template>
    <v-layout>
        <v-flex v-for="routine in routines" xs3 sm3 class="ml-4 mt-3">
            <v-card 
                class="elevation-12 mb-0"
                @click.native="goToRoutine(routine._id)"
            >
                <v-card-title class="pb-0 pt-2">
                <div>
                    <span class="subheading text-xs-center">{{ routine.name }}</span>
                </div>
                </v-card-title>
                <v-content class="mt-2" style="text-align: center">
                    <v-img :src="routine.routineImage"></v-img>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="progressValue"></v-progress-linear>
        </v-flex>
    </v-layout>
</template>

<script>

    import axios from 'axios';

    export default {
        name: 'RoutinesComponent',
        data() {
            return {
                routines: [],
                progressValue: 100
            }
        },
        mounted() {
            let user = this.$store.getters['Authentication/getUserData']._id;

            axios.get(
                `http://academia.oincriveleduardo.com.br:3000/getUserRoutines?user=${user}`
            ).then(({data}) => {
                this.routines = data
            }).catch((e) => {
                console.log(e);
            });
        },
        methods: {
            goToRoutine(id) {
                this.$router.push(`/routine-info/${id}`)
            }
        }
    }
</script>
