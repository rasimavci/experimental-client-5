<template>

<v-app id="app" standalone>
    <main>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-toolbar class="blue" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>Contacts</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>view_module</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-list two-line>
                    <v-list-tile avatar v-for="contact in contacts" v-bind:key="contact.id">
                        <v-list-tile-avatar>
                            <v-icon class="blue white--text">face</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ contact.firstName }}  {{ contact.lastName }}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>{{ contact.workPhone }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn :to="'/contacts/' + contact.id" icon ripple>
                                <v-icon class="grey--text text--lighten-1">info</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
    </main>
</v-app>
</template>

<script>
import store from '../store'

export default {
 data() {
        return {
            headers: [
                { text: 'Name', value: 'name', align: 'left' },
                { text: 'Phone', value: 'phone', align: 'left' }
            ],
        }
    },
    computed: {
        contacts() {
            return store.state.contacts
        }
    },
    template: '#contacts'
}


</script>
