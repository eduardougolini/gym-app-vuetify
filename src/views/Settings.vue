<template>
    <v-app>
        <go-back-button-component />
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form ref="form" lazy-validation>
                            <input type="file" id="imageUploader" accept=".png,.jpg,.jpeg" hidden>
                            <div class="text-xs-center">
                                <v-btn 
                                large 
                                @click="uploadImage"
                                color="secondary">
                                    <v-icon>fas fa-images</v-icon> <span class="ml-1">Adicionar nova imagem de perfil</span>
                                </v-btn>
                            </div>
                            <v-text-field
                            v-model="weight"
                            label="Seu novo peso"
                            type="number"
                            ></v-text-field>
                            <div class="text-xs-center">
                                <v-btn
                                color="primary"
                                @click="save"
                                >
                                Atualizar informações
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
    import Swal from 'sweetalert2';

    export default {
        data: () => ({
            weight: ''
        }),
        components: {
            GoBackButtonComponent
        },
        methods: {
            uploadImage() {
                document.getElementById('imageUploader').click();
            },
            save() {
                Swal({
                    title: 'Sucesso',
                    text: 'Seus dados foram atualizados com sucesso',
                    type: 'success',
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.value) {
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                    }
                })
            }
        }
    }
</script>
