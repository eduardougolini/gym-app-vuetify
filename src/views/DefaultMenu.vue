<template>
    <div>
        <div class="pb-2" :style="cssProps">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-flex
                align-center
                justify-center
                layout
                text-xs-center
                class="mb-2">
                <v-icon x-large>far fa-user</v-icon>
            </v-flex>
            <p class="subheading font-weight-light text-md-center text-sm-center text-xs-center mt-0 mb-0">Você está a 3 dias sem treinar</p>
        </div>
        <v-tabs
            slot="extension"
            v-model="model"
            grow
            color="primary"
            slider-color="secondary"
        >
            <v-tab v-for="tab in tabs">
            <v-icon>{{ tab.icon }}</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="model">
            <v-tab-item
                v-for="i in 3"
                :id="`tab-${i}`"
                :key="i"
            >
                <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    export default {
        computed: {
            cssProps () {
                return {
                    'background-color': this.$vuetify.theme.primary
                }
            }
        },
        data() {
            return {
                tabs: [
                    {
                        icon: 'fas fa-dumbbell'    
                    },
                    {
                        icon: 'fas fa-chart-pie'    
                    },
                    {
                        icon: 'fas fa-utensils'    
                    }
                ]
            }
        }
    }
</script>