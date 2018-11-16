<template>
    <v-content>
        <v-container>
            <v-layout wrap>
                <v-flex xs12>
                    <br>
                    <span class="subheading">Calorias restantes: {{ remainingCalories }}</span><br><br><br>
                    <span class="subheading mt-1">Carboidratos</span><br>
                    <v-progress-linear class="mt-1" v-model="carbs"></v-progress-linear><br>
                    <span class="subheading">Proteínas</span><br>
                    <v-progress-linear class="mt-1" v-model="proteins"></v-progress-linear><br>
                    <span class="subheading">Gorduras</span><br>
                    <v-progress-linear class="mt-1" v-model="fats"></v-progress-linear><br>
                </v-flex>
                <v-footer>
                    <v-flex
                            align-center
                            justify-center
                            layout
                            text-xs-center
                            @click="goToAddMeal"
                            class="mt-3 mb-5 pt-0 pb-0">
                        <v-icon color="primary">fas fa-plus-circle</v-icon>
                        <p class="subheading font-weight-light text-md-center text-sm-center text-xs-center ml-1 mt-0 mb-0">Adicionar refeição</p>
                    </v-flex>
                </v-footer>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: 'NutritionComponent',
        data() {
            return {
                remainingCalories: 2510,
                carbs: 70,
                proteins: 45,
                fats: 80
            }
        },
        methods: {
            goToAddMeal() {
                this.$router.push('/add-meal')
            }
        }
    }
</script>