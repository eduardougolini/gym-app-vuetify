<template>
    <v-layout>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card 
                class="elevation-12 mb-0"
                @click.native="goToRoutine"
            >
                <v-card-title class="pb-0 pt-2">
                <div>
                    <span class="subheading text-xs-center">Rotina 1</span>
                </div>
                </v-card-title>
                <v-content class="mt-2" style="text-align: center">
                    <v-img :src="firstRoutineImage"></v-img>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate"></v-progress-linear>
        </v-flex>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card 
                class="elevation-12 mb-0"
                @click.native="goToRoutine"
            >
                <v-card-title class="pb-0 pt-2">
                <div>
                    <span class="subheading text-xs-center">Rotina 2</span>
                </div>
                </v-card-title>
                <v-content class="mt-2" style="text-align: center">
                    <v-img :src="secondRoutineImage"></v-img>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate2"></v-progress-linear>
        </v-flex>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card 
                class="elevation-12 mb-0"
                @click.native="goToRoutine"
            >
                <v-card-title class="pb-0 pt-2">
                <div>
                    <span class="subheading text-xs-center">Rotina 3</span>
                </div>
                </v-card-title>
                <v-content class="mt-2" style="text-align: center">
                    <v-img :src="thirdRoutineImage"></v-img>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate2"></v-progress-linear>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'RoutinesComponent',
        data() {
            return {
                firstRoutineImage: require('@/assets/arm-routine.jpg'),
                secondRoutineImage: require('@/assets/leg-routine.jpg'),
                thirdRoutineImage: require('@/assets/leg-2-routine.jpg'),
                valueDeterminate: 30,
                valueDeterminate2: 70,
                valueDeterminate3: 45
            }
        },
        methods: {
            goToRoutine() {
                this.$router.push('/routine-info')
            }
        }
    }
</script>
