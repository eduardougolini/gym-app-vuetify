<template>
    <v-app>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form ref="form" lazy-validation>
                            <v-flex xs12 sm6 d-flex>
                                <v-select
                                :items="items"
                                label="Tipo da refeição"
                                outline
                                ></v-select>
                            </v-flex>
                            <v-text-field
                            v-model="carbs"
                            label="Carboídratos (g)"
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
            fats: ''
        })
    }
</script>
