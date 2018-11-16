<template>
    <v-app>
      <go-back-button />
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            label="Nome Completo"
                            required
                            ></v-text-field>
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            ></v-text-field>
                            <v-text-field
                            v-model="password"
                            :type="'password'"
                            :rules="passwordRules"
                            label="Senha"
                            required
                            ></v-text-field>
                            <v-menu
                                ref="menu"
                                :close-on-content-click="false"
                                v-model="menu"
                                :nudge-right="40"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                min-width="290px"
                            >
                                <v-text-field
                                slot="activator"
                                v-model="birthdate"
                                label="Data de nascimento"
                                readonly
                                required
                                ></v-text-field>
                                <v-date-picker
                                ref="picker"
                                v-model="birthdate"
                                locale="pt-BR"
                                @change="save"
                                :max="new Date().toISOString().substr(0, 10)"
                                min="1950-01-01"
                                ></v-date-picker>
                            </v-menu>
                            <v-text-field
                            v-model="height"
                            :rules="heightRules"
                            label="Altura"
                            required
                            ></v-text-field>
                            <v-text-field
                            v-model="weight"
                            :rules="weightRules"
                            label="Peso"
                            required
                            ></v-text-field>
                            <div class="text-xs-center">
                                <v-btn
                                color="primary"
                                right
                                :disabled="!valid"
                                @click="submit"
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
import axios from 'axios'
import GoBackButton from '@/components/GoBackButtonComponent';

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Campo obrigatório'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Campo obrigatório',
        v => /.+@.+/.test(v) || 'E-mail precisa ser válido'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Campo obrigatório'
      ],
      birthdate: null,
      height: '',
      heightRules: [
        v => !!v || 'Campo obrigatório'
      ],
      weight: '',
      weightRules: [
        v => !!v || 'Campo obrigatório'
      ],
      menu: false
    }),
    components: {
      GoBackButton
    },
    watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('http://localhost:3000/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                age: (new Date().getFullYear() - new Date(this.birthdate).getFullYear()),
                weight: this.weight,
                height: this.height
          }).then(() => {
              this.$router.push('/login')
          }).catch(() => {
              this.$router.push('/login')
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      save (date) {
        this.$refs.menu.save(date)
      }
    }
  }
</script>
