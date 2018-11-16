<template>
    <div xs3 sm3>
        <v-btn 
        @click="goBack"
        small>
            <v-icon color="grey darken-2">fas fa-long-arrow-alt-left</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'GoBackButtonComponent',
        data() {
            return {
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>