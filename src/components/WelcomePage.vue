<script >
import { store } from '../data/store.js'
export default {
    name: 'WelcomePage',
    data: () => ({
        store
    }),
}
</script>

<template>
    <div class="container">
        <h2 class="mt-3 test text-center">Our New Games</h2>


        <div id="carouselExample" class="carousel slide ">
            <div class="carousel-inner rounded-4">
                <div class="carousel-item active">
                    <img src="../../public/logo myvideogames.png" class="img-fluid" alt="MyVideoGames">
                </div>
                <div v-for="game in store.games" class="carousel-item ">
                    <router-link :to="{ name: 'game-detail', params: { slug: game.slug } }">
                        <img v-if="game.image" :src="game.image" class="img-fluid" :alt="game.slug">
                        <img v-else src='https://marcolanci.it/utils/placeholder.jpg' class="img-fluid " :alt="game.slug">
                    </router-link>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>










    </div>
</template>

<style lang="scss" scoped>
#carouselExample {
    height: 650px;
    width: 100%;
    margin: 2rem 0;

    .carousel-inner {
        height: 100%;
        width: 100%;
    }

    .carousel-item {
        height: 100%;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
}

h2 {
    text-transform: uppercase;
    text-shadow: 0 0 5px black;
}

.carousel-control-next-icon {
    width: 60px;
    height: 60px;
}

.carousel-control-prev-icon {
    width: 60px;
    height: 60px;
}

.test {

    background-image: linear-gradient(to right, #FF4136, #FFDC00, #FF851B);
    background-size: 0% 100%;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 1.5s ease-out;
    text-align: center;

    &:hover {

        background-size: 100% 100%;
        transition: background-size 1s ease-in-out;
        cursor: pointer;
    }
}
</style>