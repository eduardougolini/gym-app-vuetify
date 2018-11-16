<template>
    <v-app>
        <go-back-button />
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs8 sm8 md4>
                        <p class="title">Desculpe, ainda não temos dados suficientes para analisar seus avanços</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import GoBackButton from '@/components/GoBackButtonComponent';

    export default {
        data: () => ({}),
        components: {
            GoBackButton
        }
    }
</script>