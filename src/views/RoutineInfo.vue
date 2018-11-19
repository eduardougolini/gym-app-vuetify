<template>
    <v-app>
        <go-back-button />
        <v-card 
            v-for="item in items"
            :key="item.name">
            <v-img
            :src="item.exerciseImage"
            aspect-ratio="2.75"
            ></v-img>

            <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{ item.name }}</h3>
                <div>{{ item.description }}</div>
            </div>
            </v-card-title>

            <v-card-actions style="display: flex; justify-content: flex-end;">
                <div class="text-xs-center">
                    <v-btn class="white--text" @click="doExercise(item)" :color="item.alreadyTrained ? 'teal' : 'grey'">
                        Terminei!
                        <v-icon right>fas fa-check-circle</v-icon> 
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
import Swal from 'sweetalert2';
import GoBackButton from '@/components/GoBackButtonComponent';
import axios from 'axios';

export default {
    data: () => ({
        items: []
    }),
    props: [
        'id'
    ],
    components: {
        GoBackButton
    },
    mounted() {
        axios.get(
            `http://academia.oincriveleduardo.com.br:3000/getRoutineExercises?routine=${this.$props['id']}`
        ).then(({data}) => {
            console.log(data)
            this.items = data
        }).catch((e) => {
            console.log(e);
        });
    },
    methods: {
        doExercise(item) {
            item.alreadyTrained = ! item.alreadyTrained;
        },
        editExerciseInfo() {
            Swal({
                title: 'Informe os dados do seu treino',
                html:
                `
                <label class="swal2-label" for="sets">Nº de Series</label><input id="sets" class="swal2-input" type="number"><br />
                <label class="swal2-label" for="reps">Repetições</label><input id="reps" class="swal2-input" type="number"><br />
                <label class="swal2-label" for="weight">Carga (kg)</label><input id="weight" class="swal2-input" type="number"><br />
                `,
                type: 'info',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.value) {
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                    }
            })
        }
    }
}
</script>

<style>
    .swal2-container {
        font-family: Roboto,sans-serif
    }

    .swal2-label {
        width: 40%;
        display: inline-block;
    }

    .swal2-input {
        margin: 0.3em auto !important;
    }
</style>


