<script >
import axios from 'axios';
const apiUri = 'http://127.0.0.1:8000/api/videogames';
import { store } from './data/store.js'
import AppHeader from './components/AppHeader.vue';
export default {
    name: 'App',
    components: { AppHeader, },
    data: () => ({
        store
    }),
    methods: {
        fetchVideogames() {
            axios.get(apiUri).then(res => {
                store.games = res.data;
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.fetchVideogames();
    }

};
</script>

<template >
    <AppHeader></AppHeader>
    <main id="base">
        <RouterView />
    </main>
</template>

<style lang="scss"></style>