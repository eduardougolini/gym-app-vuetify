<template>
    <v-app>
        <go-back-button-component />
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form ref="form" lazy-validation>
                            <v-flex xs12 sm6 d-flex>
                                <v-select
                                :items="items"
                                v-model="type"
                                label="Tipo da refeição"
                                outline
                                ></v-select>
                            </v-flex>
                            <v-text-field
                            v-model="carbs"
                            label="Carboidratos (g)"
                            type="number"
                            required
                            ></v-text-field>
                            <v-text-field
                            v-model="proteins"
                            label="Proteínas (g)"
                            type="number"
                            required
                            ></v-text-field><v-text-field
                            v-model="fats"
                            label="Gorduras (g)"
                            type="number"
                            required
                            ></v-text-field>
                            <div class="text-xs-center">
                                <v-btn
                                color="primary"
                                @click="addNewMeal()"
                                >
                                Cadastrar
                                </v-btn>
                            </div>
                        </v-form>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import GoBackButtonComponent from '@/components/GoBackButtonComponent'
    import axios from 'axios';

    export default {
        data: () => ({
            items: [
                'Café da manhã',
                'Almoço',
                'Lanche',
                'Janta'
            ],
            carbs: '',
            proteins: '',
            fats: '',
            type: ''
        }),
        components: {
            GoBackButtonComponent
        },
        methods: {
            addNewMeal() {
                console.log('q')
                let date = new Date();
                let nowDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`;

                axios.post('http://localhost:3000/addMeal', {
                    user: this.$store.getters['Authentication/getUserData']._id,
                    date: nowDate,
                    fats: this.fats,
                    carbs: this.carbs, 
                    proteins: this.proteins,
                    type: this.type
                }).then(({data}) => {
                    console.log(data);
                }).catch((e) => {
                    console.log(e)
                })
            }
        }
    }
</script>
