<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-card-text>
                <v-flex
                  align-center
                  justify-center
                  layout
                  text-xs-center
                  class="mt-5 mb-2">
                  <v-icon x-large>far fa-user</v-icon>
                </v-flex>
              </v-card-text>
              <v-card-text class="mt-0 mb-0 pb-0">
                <v-form>
                  <v-text-field 
                    v-model="login.email" 
                    :rules="emailRules"
                    prepend-icon="fas fa-user" 
                    name="login" 
                    label="E-mail" 
                    type="text"
                    required>
                  </v-text-field>
                  <v-text-field 
                    v-model="login.password" 
                    id="password" 
                    prepend-icon="fas fa-lock" 
                    name="password" 
                    label="Senha" 
                    type="password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-text class="mt-0 mb-0 pt-0 pb-0">
                <p class="subheading font-weight-light text-md-center text-sm-center text-xs-center mt-0 mb-0">Esqueci minha senha</p>
              </v-card-text>
              <v-card-actions class="mt-0 mb-0 pt-0 pb-0">
                <v-flex
                  xs12 sm12 md12
                  align-center
                  justify-center
                  layout
                  text-xs-center
                  class="mt-3 mb-2 pt-0 pb-0">
                  <v-btn @click="loginAction(login)" color="primary">Entrar</v-btn>
                </v-flex>
              </v-card-actions>
              <v-card-actions class="mt-0 mb-0 pt-0 pb-0">
                <v-flex
                  align-center
                  justify-center
                  layout
                  text-xs-center
                  class="mt-4 mb-5 pt-0 pb-0">
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-icon large>fab fa-facebook-square</v-icon>
                  <v-spacer></v-spacer>
                  <v-icon large>fab fa-google-plus-square</v-icon>
                  <v-spacer></v-spacer>
                  <v-icon large>fab fa-twitter-square</v-icon>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
          <v-footer color="white">
            <v-flex
                  align-center
                  justify-center
                  layout
                  text-xs-center
                  @click="redirect"
                  class="mt-3 mb-5 pt-0 pb-0">
              <v-icon color="primary">fas fa-plus-circle</v-icon>
              <p class="subheading font-weight-light text-md-center text-sm-center text-xs-center ml-1 mt-0 mb-0">Criar nova conta</p>
            </v-flex>
          </v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({
      login: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'Campo obrigatório',
        v => /.+@.+/.test(v) || 'E-mail precisa ser válido'
      ]
    }),
    methods: {
      ...mapActions('Authentication', [
          'loginAction'
      ]),
      redirect() {
        this.$router.push('/register-user')
      }
    }
  }
</script>
