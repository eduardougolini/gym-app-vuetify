<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12>
                        <br>
                        <span class="subheading">Calorias restantes: {{ remainingCalories }}</span><br><br><br>
                        <span class="subheading mt-1">Carboidratos</span><br>
                        <v-progress-linear :color="exceededCarbs" class="mt-1" v-model="carbs"></v-progress-linear><br>
                        <span class="subheading">Proteínas</span><br>
                        <v-progress-linear :color="exceededProteins" class="mt-1" v-model="proteins"></v-progress-linear><br>
                        <span class="subheading">Gorduras</span><br>
                        <v-progress-linear :color="exceededFats" class="mt-1" v-model="fats"></v-progress-linear><br>
                    </v-flex>
                </v-layout>
            </v-container>
                    <v-footer color="#fafafa">
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
        </v-content>
    </v-app>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'NutritionComponent',
        data() {
            return {
                tmb: 0,
                remainingCalories: 0,
                carbs: 0,
                neededCarbs: 0,
                exceededCarbs: 'primary',
                proteins: 0,
                neededProteins: 0,
                exceededProteins: 'primary',
                fats: 0,
                neededFats: 0,
                exceededFats: 'primary'
            }
        },
        mounted() {
            this.loadTmb();
        },
        methods: {
            goToAddMeal() {
                this.$router.push('/add-meal')
            },
            loadTmb() {
                let userId = this.$store.getters['Authentication/getUserData']._id;

                axios.get(
                    `http://academia.oincriveleduardo.com.br:3000/getTmb?userId=${userId}`
                ).then(({data}) => {
                    this.tmb = this.remainingCalories = data.tmb;
                    this.calculateNeededMacros()
                    this.loadMeals();
                }).catch((e) => {
                    console.log(e)
                })
            },
            calculateNeededMacros() {
                this.neededProteins = this.$store.getters['Authentication/getUserData'].weight * 2;
                this.neededFats = this.$store.getters['Authentication/getUserData'].weight;
                this.neededCarbs = this.tmb - (this.neededProteins * 4 + this.neededFats * 9);
            },
            loadMeals() {
                let date = new Date();
                let nowDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`;
                let userId = this.$store.getters['Authentication/getUserData']._id;

                axios.get(
                    `http://academia.oincriveleduardo.com.br:3000/getMeals?user=${userId}&date=${nowDate}`
                ).then(({data}) => {
                    let ingestedCalories = data.reduce((prevVal, element) => {
                        return prevVal + (element.proteins * 4) + (element.carbs * 4) + (element.fats * 9);
                    }, 0);
                    
                    let ingestedFats = data.reduce((prevVal, element) => {
                        return prevVal + element.fats;
                    }, 0);
                    
                    this.fats = (100 / this.neededFats) * ingestedFats

                    let ingestedProteins = data.reduce((prevVal, element) => {
                        return prevVal + element.proteins;
                    }, 0);
                    this.proteins = (100 / this.neededProteins) * ingestedProteins

                    let ingestedCarbs = data.reduce((prevVal, element) => {
                        return prevVal + element.carbs;
                    }, 0);
                    console.log(this.neededCarbs)
                    this.carbs = (100 / this.neededCarbs) * ingestedCarbs

                    if (ingestedFats > this.neededFats) {
                        this.exceededFats = 'error';
                    }

                    if (ingestedCarbs > this.neededCarbs) {
                        this.exceededCarbs = 'error';
                    }

                    if (ingestedProteins > this.neededProteins) {
                        this.exceededProteins = 'error';
                    }
                    
                    this.remainingCalories = this.tmb - ingestedCalories;
                })
            }
        }
    }
</script>
