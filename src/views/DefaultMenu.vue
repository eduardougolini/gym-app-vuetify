<template>
    <div>
        <div class="pb-2" :style="cssProps">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-navigation-drawer
                persistent
                :mini-variant="false"
                :clipped="false"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                >
                <v-list dense class="pt-0">
                <v-list-tile
                    @click=""
                    :to="'settings'"
                    class="pt-3 pb-3"
                >
                    <v-list-tile-action>
                    <v-icon>fas fa-sliders-h</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                    <v-list-tile-title>Configurações</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                </v-list>
            </v-navigation-drawer>
            <v-flex
                align-center
                justify-center
                layout
                text-xs-center
                class="mb-2">
                <v-img v-if="! getUserData.userImage" :src="userImage" aspect-ratio="2" max-height="200px" max-width="200px" contain></v-img>
                <v-img v-else :src="getUserData.userImage" style="border-radius: 1000px" aspect-ratio="2" height="100px" max-width="100px" cover></v-img>
            </v-flex>
            <p class="subheading font-weight-light text-md-center text-sm-center text-xs-center mt-0 mb-0">Você está a {{ getUserData.daysWithoutTraining }} dias sem treinar</p>
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
    import { mapActions, mapGetters } from 'vuex';

    export default {
        computed: {
            cssProps () {
                return {
                    'background-color': this.$vuetify.theme.primary
                }
            },
            ...mapGetters('Authentication', [
                'getUserData'
            ])
        },
        components: {
            RoutinesComponent,
            GraphicsComponent,
            NutritionComponent
        },
        data() {
            return {
                drawer: false,
                userImage: require('@/assets/user.png'),
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