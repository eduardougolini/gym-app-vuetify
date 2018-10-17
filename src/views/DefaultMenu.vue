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
            grow
            color="primary"
            slider-color="secondary"
            v-model="selectedTab"
        >
            <v-tab v-for="tab in tabs">
                <v-icon>{{ tab.icon }}</v-icon>
            </v-tab>
        </v-tabs>

        <v-tabs-items>
            <v-tab-item
                v-for="tabItem in tabItems"
            >
            <routines-component v-if="selectedTab == 0" />
            <graphics-component v-else-if="selectedTab == 1" />
            <nutrition-component v-else-if="selectedTab == 2" />
            
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    import RoutinesComponent from '@/components/RoutinesComponent'
    import GraphicsComponent from '@/components/GraphicsComponent'
    import NutritionComponent from '@/components/NutritionComponent'

    export default {
        computed: {
            cssProps () {
                return {
                    'background-color': this.$vuetify.theme.primary
                }
            }
        },
        components: {
            RoutinesComponent,
            GraphicsComponent,
            NutritionComponent
        },
        data() {
            return {
                selectedTab: 'routines-component',
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
                ],
                tabItems: [
                    {
                        component: 'routines-component'
                    }
                ]
            }
        }
    }
</script>