<template>
    <v-app>
        <go-back-button />
        <v-list subheader>
        <v-subheader>Exercícios</v-subheader>
        <v-list-tile
            v-for="item in items"
            :key="item.name"
            avatar
            @click=""
        >
            <v-list-tile-avatar>
            <img :src="item.exerciseImage">
            </v-list-tile-avatar>

            <v-list-tile-content @click="editExerciseInfo">
            <v-list-tile-title v-html="item.name"></v-list-tile-title>
            <v-list-tile-content v-html="item.description"></v-list-tile-content>
            </v-list-tile-content>

            <v-list-tile-action>
            <v-icon @click="doExercise(item)" :color="item.alreadyTrained ? 'teal' : 'grey'">fas fa-check-circle</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        </v-list>
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
            item.active = ! item.active;
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


