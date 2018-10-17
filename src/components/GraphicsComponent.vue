<template>
    <v-layout>
        <v-flex xs5 sm5 class="ml-4 mt-3">
            <v-card class="elevation-12 pb-5 mb-5">
                <v-card-title>
                <div class="pb-3">
                    <span class="subheading text-xs-center">Peso</span>
                </div>
                </v-card-title>
                <v-content class="mt-2 mb-3" style="text-align: center">
                    <v-icon x-large>fas fa-chart-pie</v-icon>
                </v-content>
            </v-card>
        </v-flex>
        <v-flex xs5 sm5 class="ml-4 mt-3">
            <v-card class="elevation-12 pb-5 mb-5">
                <v-card-title>
                <div class="pb-3">
                    <span class="subheading text-xs-center">Força</span>
                </div>
                </v-card-title>
                <v-content class="mt-2 mb-3" style="text-align: center">
                    <v-icon x-large>fas fa-chart-pie</v-icon>
                </v-content>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: 'GraphicsComponent',
        data() {
            return {
            }
        }
    }
</script>