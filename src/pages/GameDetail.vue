<script>
import axios from 'axios';
const apiBase = 'http://127.0.0.1:8000/api/videogames/';
export default {
    name: 'GameDetail',
    components: {},
    data: () => ({
        game: '',
    }),
    methods: {
        getGame() {
            const endpoint = apiBase + this.$route.params.slug;
            axios.get(endpoint).then(res => {
                this.game = res.data;
            }).catch(err => {
                console.log(err)
            })
        },
    },
    created() {
        this.getGame();
    }

}
</script>

<template>
    <div id="detail-page">
        <div class="jumbo">
            <img class="img-fluid d-none d-md-block" :src="game.image" :alt="game.slug">
        </div>
        <div class="test"></div>
        <div class="container d-flex justify-content-center">
            <div class="card-body py-5">
                <div class="card-info px-5">
                    <h1 class="text-center m-0 mb-4">{{ game.title }}</h1>
                    <div class=" mb-4">
                        <p class="m-0">Release Date: <i>{{ game.sale_date }}</i></p>
                    </div>
                    <div class="game-description">
                        <h4 class="mb-4 text-center">Riguardo il gioco</h4>
                        <p class="">{{ game.description }}</p>
                    </div>
                    <div class="game-price mt-2">
                        <div class="d-flex mt-3">
                            <h2>€ {{ game.price }}</h2>
                            <div class="btn btn-custom ms-3"><i class="fa-solid fa-bag-shopping me-2"
                                    style="color: #ffffff;"></i>
                                Acquista</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-end align-items-center me-2">
                    <router-link class="btn btn-primary" :to="{ name: 'games' }"><i
                            class="fa-regular fa-lg fa-hand-point-left fa-fade" style="color: #ffffff;"></i></router-link>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.detail-page {
    height: 100vh;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    margin-bottom: 3rem;
}

.test {
    height: 400px;
    width: 100%;
}

.jumbo {
    height: 600px;
    width: 100%;

    img {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        object-fit: fill;
        object-position: top;
    }
}

.card-body {
    width: 50%;
    min-height: 350px;
    border-radius: 10px;
    backdrop-filter: blur(50px);
    position: absolute;
    bottom: 10%;
    top: 45%;
    z-index: 1;
    color: rgb(255, 255, 255);

    .btn-custom {
        background-color: rgb(246, 48, 63);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>