<script >
import { store } from '../../data/store.js'
import GameCard from '../vidoegames/GameCard.vue';

export default {
    name: 'GamesList',
    components: { GameCard },
    data: () => ({
        store
    }),

};
</script>
<template>
    <div class="container my-4">
        <h2 class="mb-4">All Games</h2>
        <div class="row g-4 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            <div v-for="game in store.games" :key="game.id" class="col">
                <GameCard :game="game" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    height: 250px;
}
</style>