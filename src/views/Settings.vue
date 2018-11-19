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
    import axios from 'axios';

    export default {
        data: () => ({
            weight: 0
        }),
        components: {
            GoBackButtonComponent
        },
        mounted() {
            this.weight = this.$store.getters['Authentication/getUserData'].weight;
        },
        methods: {
            uploadImage() {
                document.getElementById('imageUploader').click();
            },
            save() {
                let file = document.getElementById('imageUploader').files[0];
                let userImage = null; 
                
                if (file) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);

                    var that = this;

                    reader.onload = function(e) {
                        that.updateInfo(e.target.result);
                    };
                } else {
                    this.updateInfo();
                }

                

            },
            updateInfo(userImage = null) {
                let userId = this.$store.getters['Authentication/getUserData']._id;
                let userData = this.$store.getters['Authentication/getUserData'];
                userImage = userImage ? userImage : this.$store.getters['Authentication/getUserData'].userImage;

                Swal.showLoading() 

                axios.put('http://academia.oincriveleduardo.com.br:3000/updateUserInfo', {
                    userId,
                    userImage,
                    weight: this.weight
                }).then(({data}) => {
                    userData.weight = this.weight;
                    userData.userImage = userImage;

                    this.$store.commit('Authentication/SET_USER_DATA', userData );
                    
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
                }).catch(e => {
                    console.log(e)
                });
            }
        }
    }
</script>
