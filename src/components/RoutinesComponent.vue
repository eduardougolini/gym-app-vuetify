<template>
    <v-layout>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card class="elevation-12 pb-3 mb-0">
                <v-card-title>
                <div>
                    <span class="subheading text-xs-center">Rotina 1</span>
                </div>
                </v-card-title>
                <v-content class="mt-2 mb-3" style="text-align: center">
                    <v-icon x-large>fas fa-dumbbell</v-icon>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate"></v-progress-linear>
        </v-flex>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card class="elevation-12 pb-3 mb-0">
                <v-card-title>
                <div>
                    <span class="subheading text-xs-center">Rotina 2</span>
                </div>
                </v-card-title>
                <v-content class="mt-2 mb-3" style="text-align: center">
                    <v-icon x-large>fas fa-dumbbell</v-icon>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate2"></v-progress-linear>
        </v-flex>
        <v-flex xs3 sm3 class="ml-4 mt-3">
            <v-card class="elevation-12 pb-3 mb-0">
                <v-card-title>
                <div>
                    <span class="subheading text-xs-center">Rotina 3</span>
                </div>
                </v-card-title>
                <v-content class="mt-2 mb-3" style="text-align: center">
                    <v-icon x-large>fas fa-dumbbell</v-icon>
                </v-content>
            </v-card>
                <v-progress-linear class="mt-0" v-model="valueDeterminate3"></v-progress-linear>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'RoutinesComponent',
        data() {
            return {
                valueDeterminate: 30,
                valueDeterminate2: 70,
                valueDeterminate3: 45
            }
        }
    }
</script>
