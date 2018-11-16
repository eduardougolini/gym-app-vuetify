<template>
    <v-app>
        <go-back-button />
        <v-list subheader>
        <v-subheader>Exercícios</v-subheader>
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
        >
            <v-list-tile-avatar>
            <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content @click="editExerciseInfo">
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-content v-html="item.description"></v-list-tile-content>
            </v-list-tile-content>

            <v-list-tile-action>
            <v-icon @click="doExercise(item)" :color="item.active ? 'teal' : 'grey'">fas fa-check-circle</v-icon>
            </v-list-tile-action>
        </v-list-tile>
        </v-list>
    </v-app>
</template>

<script>
import Swal from 'sweetalert2';
import GoBackButton from '@/components/GoBackButtonComponent';

export default {
    data: () => ({
        items: [
          { active: false, title: 'Supino reto', description: 'asdfasdasdas asdd adsa sdas', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { active: false, title: 'Supino inclinado', description: 'asdfasdasdas asdd adsa sdas', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { active: false, title: 'Peck Deck', description: 'asdfasdasdas asdd adsa sdas', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { active: false, title: 'Cross Over', description: 'asdfasdasdas asdd adsa sdas', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
    }),
    components: {
        GoBackButton
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


