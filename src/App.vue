<template>
  <v-app v-model="appRouter">
    <router-view/>
  </v-app>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "App",
        data: () => {
            return {
                appRouter: null
            }
        },
        computed: {
            ...mapGetters('Authentication', [
                'getUserData'
            ])
        }, 
        beforeMount() {
            if (! this.$store.getters['Authentication/getUserData']) {
                this.$router.push('login')
            }
        },
        watch: {
            getUserData() {
                if (! this.$store.getters['Authentication/getUserData']) {
                    this.$router.push('login')
                }
            }
        }
    };
</script>